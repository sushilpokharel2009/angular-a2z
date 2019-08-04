const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  first: {
    unique: true,
    type: "string"
  },
  last: "string",
  email: "string",
  num: "number",
  address: "string"
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
