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
  ZEPTO_MAIL_URI: process.env.ZEPTO_MAIL_URI,
  ZEPTO_MAIL_TOKEN: process.env.ZEPTO_MAIL_TOKEN,
  BOUNCE_ADDRESS: process.env.BOUNCE_ADDRESS,
  VERIFIED_DOMAIN :process.env.VERIFIED_DOMAIN,
  ADMIN_SERVICE_URI: process.env.ADMIN_SERVICE_URI,
};

module.exports = KEYS;
