const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // CODE HERE
  username: {
    type: String,
    trim: true,
    required: true,
  },

  password: {
    type: String,
    trim: true,
    minLength: 6,
  },

  email: {
    type: String,
    match: [/([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
    unique: true,
  },

  userCreated: {
    type: Date,
		default: Date.now,
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
