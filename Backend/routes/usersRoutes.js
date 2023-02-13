const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController')


router.post('/fetch/user', usersController.fetchUsers)




module.exports = router;