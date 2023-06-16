const express = require('express');
const {addReview} = require('../controllers/reviewController');
const {isAuthenticated} = require('../middleware/Auth');

const router = express();

router.route('/review/:id').post(isAuthenticated, addReview);


module.exports = router;