const Joi = require('@hapi/joi')
const registerValidation = data => {
    const schema = {
        name: Joi.string().required(),
        email: Joi.string().min(6).required().email(),
        profession: Joi.string().required(),
        password: Joi.string().min(8).max(20).required(),
    }
    return Joi.validate(data, schema)
}

const loginValidation = data => {
    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    }
    return Joi.validate(data, schema)
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;