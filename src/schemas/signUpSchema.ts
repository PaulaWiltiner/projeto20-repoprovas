import Joi from 'joi';

export const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
  samePassword: Joi.string().equal(Joi.ref('password')).required()
});