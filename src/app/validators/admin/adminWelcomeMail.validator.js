const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.adminWelcomeSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    newAdminUsername: Joi.string().required(),
});

