const express = require('express');
const { login, register, logout, loadUser } = require('../controllers/userController');
const router = express();
const {isAuthenticated} = require('../middleware/Auth');


/*router.post('/login', login);
router.post('/register', register);
router.get('/logout', logout);*/

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('').get(isAuthenticated, loadUser);

module.exports = router;