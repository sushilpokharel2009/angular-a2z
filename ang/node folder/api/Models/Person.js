const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        unique: true,
        type: "string"
    },
    password: "string"
});

const Person = mongoose.model("Person", UserSchema);

module.exports = Person;