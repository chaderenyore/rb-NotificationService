const mongoose = require("mongoose");

const notificationOutLoggingSchema = mongoose.Schema(
  {
    notification_type: {
      type: String,
      enum: ["sms", "email"],
    },
    receiver_id: {
      type: mongoose.Schema.ObjectId,
    },
    status: {
      type: Boolean,
      default: false,
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

const NotificationOutLogging = mongoose.model("NotificationOutLogging", notificationOutLoggingSchema);

module.exports = NotificationOutLogging;
