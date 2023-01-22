const mongoose = require("mongoose");

const actionsSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    scenario: {
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
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Actions = mongoose.model("Actions", actionsSchema);

module.exports = Actions;
