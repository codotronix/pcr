const robot = require("robotjs")

/**
 * This is get a post json "diff" as { x: number, y: number }
 * Then it will apply the diff to the current mouse position
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const mouseMove = (req, res, next) => {
    try {
        // console.log('req.body 1 = ', req.body)
        const diff = req.body;
        // console.log(diff)
        const currentPos = robot.getMousePos()
        robot.moveMouseSmooth(currentPos.x + diff.x, currentPos.y + diff.y)
        // robot.moveMouse(currentPos.x + diff.x, currentPos.y + diff.y)
        res.json({
            status: 200
        })
    }
    catch (err) {
        res.json({ err })
    }
}

module.exports = mouseMove