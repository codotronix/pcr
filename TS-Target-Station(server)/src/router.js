const router = require('express').Router()

const mouseMove = require('./controllers/mousemove')

router.get('/', (req, res, next) => {
    res.send('Hello Bro')
})

router.post('/move-mouse', mouseMove)

module.exports = router