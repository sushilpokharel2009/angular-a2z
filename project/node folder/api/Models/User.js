const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        unique: true,
        type: 'string'
    },
    email: "string",
    phone: "number",
    address: "string",
    textarea: "string"
})

const User = mongoose.model('users', UserSchema);


module.exports = User;