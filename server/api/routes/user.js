const express = require('express');
const router  = express.Router();
const userController = require('../controllers/user');

router.get('/user', userController.getAllUsers);
router.post('/user', userController.newUser);

router.get('/user/:id', userController.getUser);

module.exports = router;
