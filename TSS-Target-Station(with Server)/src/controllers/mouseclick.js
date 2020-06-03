const robot = require("robotjs")

/**
 * robot.mouseToggle([down], [button])
 * [down] can be either of 'up' or 'down', that is mouse pressed down or released up
 * [button] can be 'left', 'middle' or 'right' mouse button
 * 
 * So, from FrontEnd we will send post params as
 * {
 *  "button": "left" | "right" | "middle"
 *  "clickType": "click" | "double" | "down" | "up"   
 * }
 * where 'click' will mean down+up
 * and 'double' will mean down+up+down+up
 */

 const mouseClick = async (req, res, next) => {
    try {
        // console.log('req.body 2 = ', req.body)
        let { button, clickType } = req.body
        button = button || 'left'
        clickType = clickType || 'click'

        const clickDuration = 200   // time duration of mouse-click i.e. down and up
        const timeGap2Clicks = 50  // time gap between 2 clicks of double click

        if (clickType === 'click') {
            robot.mouseToggle('down', button)
            await timeoutAsync(() => robot.mouseToggle('up', button), clickDuration)
            res.json({ status: 200 })
        }
        else if (clickType === 'double') {
            robot.mouseToggle('down', button)
            await timeoutAsync(() => robot.mouseToggle('up', button), clickDuration)
            await timeoutAsync(() => robot.mouseToggle('down', button), timeGap2Clicks)
            await timeoutAsync(() => robot.mouseToggle('up', button), clickDuration)
            res.json({ status: 200 })
        }
        else {
            robot.mouseToggle(clickType, button)
            res.json({ status: 200 })
        }
    }
    catch(err) {
        console.log(err)
        res.json({ err })
    }
 }

 const timeoutAsync = (cb, waitTime) => {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             try {
                let r = cb()
                resolve(r)
             }
             catch (err) {
                reject(err)
             }
         }, waitTime)
     })
 }

 module.exports = mouseClick