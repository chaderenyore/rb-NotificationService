const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

exports.userBlockedSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  username: Joi.string().required(),
  role: Joi.string()
    .valid(
      'super',
      'admin',
      'support',
      'content-writer',
      'research-reviewer',
      'moderator',
      'account-view',
      'account-edit'
    )
    .required(),
  reason: Joi.string().required(),
  unblock_steps: Joi.array().required(),
});
