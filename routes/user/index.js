const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../helpers/token');

const {
    userRegistration,
 userLogin,
 getAllUser,
 deleteUser,
} = require('./controller');

router.post('/', userRegistration);
router.post('/userlogin', userLogin);
router.get('/getalluser', verifyToken, getAllUser);
router.delete('/deleteuser', verifyToken, deleteUser);


module.exports = router;