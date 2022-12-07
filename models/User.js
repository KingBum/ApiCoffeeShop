const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String},
    password: { type: String},
    email: {type: String},
    phone : {type: String},
    avatar: { type: String },
    address: { type: String },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);