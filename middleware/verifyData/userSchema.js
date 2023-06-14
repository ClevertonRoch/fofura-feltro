const yup = require('yup')

const create = yup.object().shape({
  name: yup.string().min(2).trim().strict().required(),
  email: yup.string().email().trim().strict().required(),
  password: yup.string().min(4).trim().strict().required()
})

const update = yup.object().shape({
  id: yup.number().integer().required(),
  name: yup.string().min(2).trim().strict().required(),
  email: yup.string().email().trim().strict().required()
})

const email = yup.object().shape({
  id: yup.number().integer().required()
})

const id = yup.object().shape({
  id: yup.number().integer().required()
})

module.exports = {
  create,
  update,
  id,
  email
}
