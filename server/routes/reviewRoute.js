const express = require('express');
const {addReview, getBookReviewList} = require('../controllers/reviewController');
const {isAuthenticated} = require('../middleware/Auth');

const router = express();

router.route('/review/:id')
    .post(isAuthenticated, addReview);

router.route('/review/:isbn')
    .get(getBookReviewList);




module.exports = router;