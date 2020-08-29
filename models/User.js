const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
name: {
    type: String,
    required: true,
},
email: {
    type: String,
    required: true,
},
password: {
    type: String,
    required: true,
},
image: {
    type: String,
},

facebookProvider: {
    type: {
        id: String,
        token: String,
    },
    select: false,
},
googleProvider: {
    type: {
        id: String,
        token: String,
    },
    select: false,
},
isSosialLogin: {
    type: Boolean,
    default: false,
},
createAt: {
    type: Date,
    default: Date.now,
},
updateAt: {
    type: Date,
    default: Date.now,
},

});

const User = mongoose.model(`users`, userSchema);

module.exports = User;