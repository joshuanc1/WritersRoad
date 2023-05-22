const express = require('express');
const {login, register} = require('../controllers/userController');
const router = express();



router.route("/login").post(login);
router.route("/register").post(register);


module.exports = router;