const Joi = require("joi").extend(require("@joi/date"));
Joi.objectId = require("joi-objectid")(Joi);

exports.mailSchema = Joi.object().keys({
  first_name: Joi.string().required().label("First name"),
  email: Joi.string().email().required(),
  start: Joi.date()
  .format(["YYYY-MM-DD", "DD-MM-YYYY", "DD/MM/YYYY"])
  .utc()
  .optional(),
  end: Joi.date()
  .format(["YYYY-MM-DD", "DD-MM-YYYY", "DD/MM/YYYY"])
  .utc()
  .optional(),
});

exports.requestPasswordResetSchema = Joi.object().keys({
  // first_name: Joi.string().required().label("First name"),
  email: Joi.string().email().required(),
  token: Joi.string().required(),
});
exports.requestAccountVerificationSchema = Joi.object().keys({
  first_name: Joi.string().required().label("First name"),
  email: Joi.string().email().required(),
  token: Joi.string().required(),
  link: Joi.string().required()
});

exports.paymentSuccessfullSchema = Joi.object().keys({
  first_name: Joi.string().required().label("First name"),
  email: Joi.string().email().required(),
  userReference: Joi.string().required(),
  account_id: Joi.string().required(),
  amount: Joi.number().positive().required(),
  date:Joi.string().required(),
  total_amount: Joi.number().positive().required()
});

exports.topUpSchema = Joi.object().keys({
  first_name: Joi.string().required().label("First name"),
  email: Joi.string().email().required(),
  userReference: Joi.string().required(),
  amount: Joi.number().positive().required(),
  date:Joi.string().required(),
});

exports.inviteSchema = Joi.object().keys({
  first_name: Joi.string().required().label("First name"),
  email: Joi.string().email().required(),
  role: Joi.string().required(),
  link: Joi.string().required()
});

exports.appUpdateSchema = Joi.object().keys({
  first_name: Joi.string().required().label("First name"),
  email: Joi.string().email().required(),
  ios_link: Joi.string().required(),
  android_link: Joi.string().required(),
});

exports.customMailSchema = Joi.object().keys({
  subject: Joi.string().required(),
  first_name: Joi.string().required().label("First name"),
  email: Joi.string().email().required(),
  title: Joi.string().required(),
  paragraph1: Joi.string().required(),
  paragraph2: Joi.string().optional(),
  paragraph3: Joi.string().optional(),
  paragraph4: Joi.string().optional(),
  remarks: Joi.string().optional(),
});
