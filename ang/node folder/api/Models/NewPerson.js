const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    _email: {
        unique: true,
        type: "string"
    },
    _password: "string"
});

const Person = mongoose.model("Person", UserSchema);

module.exports = Person;