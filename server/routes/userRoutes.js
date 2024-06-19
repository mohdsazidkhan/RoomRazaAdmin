const express = require('express');
const { deleteUser, getUserList, getAllUserCount, updateUser, getUserListings, getUser } = require('../controllers/userController');
const {isValidToken} = require("../controllers/authController");
const router = express.Router();

router.get('/user/list', isValidToken, getUserList);
router.get('/user/totalCount', isValidToken, getAllUserCount);
router.post('/user/update/:id', isValidToken, updateUser)
router.delete('/user/delete/:id', isValidToken, deleteUser)
router.get('/user/listings/:id', isValidToken, getUserListings)
router.get('/user/:id', isValidToken, getUser)

module.exports = router;