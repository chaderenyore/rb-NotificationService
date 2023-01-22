const mongoose = require("mongoose");

const linksSchema = mongoose.Schema(
  {
    token: {
      type: Number,
    },
    destination: {
      type: String,
    },
    click_count: {
      type: Number,
    },
    last_click: {
      type: Date,
    },
    out_logging_id: {
      type: mongoose.Schema.ObjectId,
      ref: "NotificationOutLogging",
    },
    status: {
      type: Boolean,
      default: false,
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

const Links = mongoose.model(
  "Links",
  linksSchema
);

module.exports = Links;
