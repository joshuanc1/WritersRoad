const express = require('express');
const { login, register, logout } = require('../controllers/userController');
const router = express();


/*router.post('/login', login);
router.post('/register', register);
router.get('/logout', logout);*/

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);


module.exports = router;