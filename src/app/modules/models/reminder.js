const mongoose = require("mongoose");

const reminderSchema = mongoose.Schema(
  {
    receivers_id: {
      type: mongoose.Schema.ObjectId,
    },
    reminder_interval: {
      type: Number,
    },
    reminder_interval_end: {
      type: Number,
    },
    status: {
      type: Boolean,
      default: false,
    },
    action_name: {
      type: mongoose.Schema.ObjectId,
      ref: "Actions",
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Reminder = mongoose.model(
  "Reminder",
  reminderSchema
);

module.exports = Reminder;
