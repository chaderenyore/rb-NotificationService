const dotenv = require("dotenv");
dotenv.config();

const KEYS = {
  mongoURI: process.env.MONGODBURI,
  redisHost: process.env.REDISHOST,
  redisPort: process.env.REDISPORT,
  redisPassword: process.env.REDISPASSWORD,
  appVersion: process.env.APP_VERSION,
  AUTH_URI: process.env.AUTH_URI,
  AMQP_URI:process.env.AMQP_URI,
  WELCOME_MAIL_QUEUE: process.env.WELCOME_MAIL_QUEUE,
  PASSWORD_RESET_MAIL_QUEUE: process.env.PASSWORD_RESET_MAIL_QUEUE,
  ACCOUNT_VERIFICATION_MAIL_QUEUE: process.env.ACCOUNT_VERIFICATION_MAIL_QUEUE,
};

module.exports = KEYS;
