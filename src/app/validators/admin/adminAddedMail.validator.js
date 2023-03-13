const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

exports.adminAddedSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    newAdminUsername: Joi.string().required(),
    role: Joi.string().required(),
    password: Joi.string().required(),
    adminUrl: Joi.string().required(),
    loginUrl: Joi.string().required(),
});

