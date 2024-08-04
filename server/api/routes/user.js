const express = require('express');
const router  = express.Router();
const userController = require('../controllers/user');

router.post('/api/sign-up', userController.signUp);
router.post('/api/sign-in', userController.signIn);
router.post('/api/verify', userController.verify);
router.get('api/user', userController.userInfo);

module.exports = router;
