const mongoose = require("mongoose");

const NotificationsControlSchema = mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["sms", "mail"],
    },
    provider_name: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    approved: {
      type: Boolean,
      default: true,
    },
    approved_by: {
      type: String,
    },
    added_by: {
      type: String,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const NotificationsControl = mongoose.model("MailControl", NotificationsControlSchema);

module.exports = NotificationsControl;
