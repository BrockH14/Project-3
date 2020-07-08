var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Username is required!"
    },
    password: {
        type: String,
        trim: true,
        required: "Password is required!",
        validate: [
            function(input) {
                return input.length >= 7;
            },
            "Password should be longer than 7 characters"
        ]
    },
    userCreated: {
        type: Date,
        default: Date.now
    }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;