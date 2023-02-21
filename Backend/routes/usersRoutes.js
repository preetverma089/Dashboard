const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController')


router.post('/fetch/user', usersController.fetchUsers)


router.post('/login/user',usersController.loginUsers)

module.exports = router;