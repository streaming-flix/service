const { hashPassword } = require('./bcrypt');
const { createToken, verifyToken } = require('./token');
const {
    facebookAuthenticate,
    googleAuthenticate,
    jwtAuthenticate,
} = require('./auth');


module.exports = {
    createToken,
    verifyToken,
    hashPassword,
    facebookAuthenticate,
    googleAuthenticate,
    jwtAuthenticate,
};