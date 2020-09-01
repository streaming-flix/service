const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../helpers/token');

const {
    userRegistration,
 userLogin,
 getAllUser,
 deleteUser,
 updateUser,
} = require('./controller');

router.post('/', userRegistration);
router.post('/login', userLogin);
router.get('/getall', verifyToken, getAllUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.put('/update/:id', verifyToken, updateUser);

module.exports = router;