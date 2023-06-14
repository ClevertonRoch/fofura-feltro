const router = require('express').Router()

require('./../middleware/verifyData/traslationYup')
const userRouter = require('./User')

router.use('/', userRouter)

module.exports = router
