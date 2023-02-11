const fs = require("fs");
const ejs = require("ejs");
var { SendMailClient } = require("zeptomail");
const KEYS = require("../../_config/keys");
const Action = require("../../app/modules/models/actions");
const Notification = require("../../app/modules/models/notifications");
const NotificationMessage = require("../../app/modules/models/notification_messages");
const NotificationOutLogging = require("../../app/modules/models/notification_out_logging");
const ZEPTO_EMAIL = KEYS.ZEPTO_MAIL_URI;
const ZEPTO_MAIL_TOKEN = KEYS.ZEPTO_MAIL_TOKEN
let client = new SendMailClient({ZEPTO_EMAIL, ZEPTO_MAIL_TOKEN});

exports.sendMail = async (data) => {
  try {
    client.sendMail({
      "bounce_address": KEYS.BOUNCE_ADDRESS,
      "from": 
      {
          "address": `noreply@${KEYS.VERIFIED_DOMAIN}`,
          "name": "noreply"
      },
      "to": 
      [
          {
          "email_address": 
              {
                  "address": data.email,
                  "name": data.name ? data.name : "Reserch Budddy"
              }
          }
      ],
      "subject": data.subject,
      "htmlbody": data.html,
      "track_clicks": true,
      "track_opens": true,
  }).then((resp) => {
    return {
      error: true,
      data: sentMail,
    };
  }).catch((error) => {
    return {
      error: false,
      data: sentMail,
    };
  });
  } catch (error) {
    // console.log(error.response.body);
    return {
      error: true,
      message: "Error Sending mail",
    };
  }
};

exports.saveTransaction = async (actionType, data) => {
  try {
    const action = await Action.create({
      name: actionType,
      scenario: data.scenario,
      receiver_type: data.type,
      status: false,
    });

    const notification = await Notification.create({
      raw_data: data.message || "",
      receiver_type: data.type,
      status: false,
      start_time: Date.now(),
      action_id: action._id,
    });

    const notification_message = await NotificationMessage.create({
      message: data.message || "",
      type: "email",
      status: false,
      actions_id: action._id,
      notification_id: notification._id,
    });

    const notification_out_logging = await NotificationOutLogging.create({
      type: "email",
      receiver_id: data.user_id,
      status: false,
      notification_id: notification._id,
      actions_id: action._id,
    });
    action.status = true;
    await action.save();

    notification.status = true;
    notification.end_time = Date.now();
    await notification.save();

    notification_message.status = true;
    await notification_message.save();

    notification_out_logging.status = true;
    await notification_out_logging.save();
    return {
      action,
      notification,
      notification_message,
      notification_out_logging,
    };
  } catch (error) {
    console.error(error);
  }
};

exports.parseTemplate = async (path, data) => {
  try {
    const template = fs.readFileSync(process.cwd() + path, {
      encoding: "utf-8",
    });

    const html = ejs.render(template, data);
    return {
      html,
    };
  } catch (error) {
    console.error(error);
  }
};
