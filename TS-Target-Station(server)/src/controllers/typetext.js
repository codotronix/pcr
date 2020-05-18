const robot = require("robotjs")

/**
 * postJSON
 * { typedTxt: 'abc etc' }
 */
const typeText = (req, res, next) => {
    try {
        const typedTxt = req.body.typedTxt || ''
        robot.typeString(typedTxt)
        res.json({
            status: 200
        })
    }
    catch (err) {
        res.json({ err })
    }
}

module.exports = typeText