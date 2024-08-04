const express = require('express');
const router  = express.Router();
const userController = require('../controllers/user');

router.post('/api/sign-up', userController.signUp);
router.get('/api/sign-in', userController.signIn);

module.exports = router;
