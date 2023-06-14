const router = require('express').Router()
const userControl = require('./../../controllers/Users')
const userSchema = require('./../../middleware/verifyData/userSchema')
const validaData = require('./../../middleware/verifyData')

router.get('/users',
  validaData(userSchema.create, 'body'),
  userControl.findAll
)

module.exports = router
