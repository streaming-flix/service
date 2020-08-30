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
router.delete('/delete/:id', verifyToken, deleteAdmin);
router.put('/update/:id', verifyToken, updateAdmin);


module.exports = router;