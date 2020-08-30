const express = require('express');
const router = express.Router();
const { verifyToken } = require('../../helpers/token');


const {
    addMovie,
    updateMovie,
    deleteMovie,
    getAllMovie,
    findBySearch,
 
} = require('./controller');

router.post('/', verifyToken, addMovie);
router.put('/update/:id', verifyToken, updateMovie);
router.delete('/delete/:id', verifyToken, deleteMovie);
router.get('/getall', getAllMovie);
router.get('/findBySearch', findBySearch);



module.exports = router;