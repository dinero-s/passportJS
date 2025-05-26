const express = require('express');
const router = express.Router();
const userService = require('../service/index');
const userMiddleWare = require('../middleware/loginMiddleware');

router.get('/', (req, res) => {
    res.render('home', { user: req.user })
})
router.get('/user/login', userService.getLoginPage)
router.get('/user/me', userService.getProfile)
router.post('/user/login', userMiddleWare, userService.getProfile)
router.post('/user/signup', userService.createUser);

module.exports = router;