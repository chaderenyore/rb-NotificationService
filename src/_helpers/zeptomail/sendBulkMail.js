const fs = require("fs");
const ejs = require("ejs");
var { SendMailClient } = require("zeptomail");
const KEYS = require("../_config/keys");
const Action = require("../app/modules/main/models/actions");
const Notification = require("../app/modules/models/notifications");
const NotificationMessage = require("../app/modules/models/notification_messages");
const NotificationOutLogging = require("../app/modules/models/notification_out_logging");

const ZEPTO_EMAIL = KEYS.ZEPTO_MAIL_URI;
const ZEPTO_MAIL_TOKEN = KEYS.ZEPTO_MAIL_TOKEN
let client = new SendMailClient({ZEPTO_EMAIL, ZEPTO_MAIL_TOKEN});

exports.sendMail = async (data) => {
  try {
//    TODO:::: BULK sms
  } catch (error) {
    // console.log(error.response.body);
    return {
      error: true,
      message: "Error Sending mail",
    };
  }
};