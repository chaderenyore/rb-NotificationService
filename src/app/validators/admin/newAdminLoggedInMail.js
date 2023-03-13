const Joi = require ('joi');
Joi.objectId = require ('joi-objectid') (Joi);

exports.newAdminLoggedInSchema = Joi.object ().keys ({
  email: Joi.string ().email ().required (),
  adminUsername: Joi.string().required(),
  role: Joi.string ()
    .valid (
      'super',
      'admin',
      'support',
      'content-writer',
      'research-reviewer',
      'moderator',
      'account-view',
      'account-edit'
    )
    .required (),
  newAdminUsername: Joi.string ().required (),
  newAdminEmail: Joi.string ().required (),
});
