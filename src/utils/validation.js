import Joi from 'joi';

// Validate user registration input
const validateRegisterInput = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    });

    return schema.validate(data);
};

// Validate user login input
const validateLoginInput = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    });

    return schema.validate(data);
};

export { validateRegisterInput, validateLoginInput };
