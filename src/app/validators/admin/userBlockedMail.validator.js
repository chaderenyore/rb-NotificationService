const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

exports.userBlockedSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  reason: Joi.string().required(),
  unblock_steps: Joi.array().required(),
});
