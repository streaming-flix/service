const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../helpers/token');

const {
    adminRegistration,
 adminLogin,
 getAllAdmin,
 deleteAdmin,
} = require('./controller');

router.post('/', adminRegistration);
router.post('/adminlogin', adminLogin);
router.get('/getalladmin', verifyToken, getAllAdmin);
router.delete('/deleteadmin', verifyToken, deleteAdmin);


module.exports = router;