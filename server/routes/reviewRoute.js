const express = require('express');
const {addReview, getBookReviewList, deleteReview} = require('../controllers/reviewController');
const {isAuthenticated} = require('../middleware/Auth');

const router = express();

router.route('/review/:id')
    .post(isAuthenticated, addReview)
    .delete(isAuthenticated, deleteReview);

router.route('/review/:isbn')
    .get(getBookReviewList);




module.exports = router;