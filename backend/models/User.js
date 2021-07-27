const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
  },
  phone: {
    type: String,
    required: [true, "Please enter phone number"],
    minLength: [10, "Please add valid phone number"],
    maxLength: [10, "Please add valid phone number"],
  },
});

module.exports = mongoose.model("User", UserSchema);
