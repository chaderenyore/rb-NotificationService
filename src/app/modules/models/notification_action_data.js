const mongoose = require("mongoose");

const notificationActionDataSchema = mongoose.Schema(
  {
    field_name: {
      type: String,
    },
    field_value: {
      type: String,
    },
    notification_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Notification",
    },
    action_id: {
      type: mongoose.Schema.ObjectId,
      ref: "Actions",
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const NotificationActionData = mongoose.model(
  "NotificationActionData",
  notificationActionDataSchema
);

module.exports = NotificationActionData;
