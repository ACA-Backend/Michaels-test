

import Joi from 'joi';

// Joi schema for user registration validation
const validateUserRegistration = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required()
  });
  return schema.validate(data);
};

export { validateUserRegistration };