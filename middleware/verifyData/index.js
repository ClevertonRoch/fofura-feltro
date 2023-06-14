const statusCode = require('http-status')
const validateData = (schema, dataLocation) => {
  return async (req, res, next) => {
    try {
      await schema.validate(req[dataLocation], { abortEarly: false })
      next()
    } catch (error) {
      const erroYup = error.inner.map((err) => ({
        field: err.path,
        message: err.message
      }))
      res.status(statusCode.BAD_REQUEST).json({ response: erroYup })
    }
  }
}
module.exports = validateData
