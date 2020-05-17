const router = require('express').Router()

const mouseMove = require('./controllers/mousemove')
const mouseClick = require('./controllers/mouseclick')

// router.use('/', (req, res, next) => {
//     // res.send('Hello Bro')
//     // console.log('req.body', req.body)
//     // next()
// })

router.post('/mouse-move', mouseMove)
router.post('/mouse-click', mouseClick)

module.exports = router