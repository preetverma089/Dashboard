const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController')

router.post('/save/user', registerController.registerUser)
router.post('/fetch/users', registerController.fetchUsers)

module.exports = router;