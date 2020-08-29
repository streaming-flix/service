const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../helpers/token');

const {
    adminRegistration,
 adminLogin,
 getAllAdmin,
 deleteAdmin,
 updateAdmin
} = require('./controller');

router.post('/', adminRegistration);
router.post('/login', adminLogin);
router.get('/getall', verifyToken, getAllAdmin);
router.delete('/delete', verifyToken, deleteAdmin);
router.put('/update', verifyToken, updateAdmin);


module.exports = router;