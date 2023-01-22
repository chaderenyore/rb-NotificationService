const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema(
  {
    is_parameter: {
      type: Number,
    },
    raw_data: {
      type: String,
    },
    receiver_type: {
      type: String,
      enum: ["user", "org"],
    },
    status: {
      type: Boolean,
      default: false,
    },
    start_time: {
      type: Date,
    },
    end_time: {
      type: Date,
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

const Notification = mongoose.model(
  "Notification",
  notificationSchema
);

module.exports = Notification;
