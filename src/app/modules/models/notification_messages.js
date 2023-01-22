const mongoose = require("mongoose");

const notificationMessagesSchema = mongoose.Schema(
  {
    is_parameter: {
      type: Number,
    },
    message: {
      type: String,
    },
    type: {
      type: String,
      enum: ["app", "sms", "whatsapp", "email"],
    },
    status: {
      type: Boolean,
      default: false,
    },
    actions_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Actions",
    },
    notification_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Notifications",
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const NotificationMessages = mongoose.model(
  "NotificationMessages",
  notificationMessagesSchema
);

module.exports = NotificationMessages;
