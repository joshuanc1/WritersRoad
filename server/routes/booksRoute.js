const express = require('express');
const { findBooks, getBookDetail, addBookToLibrary } = require('../controllers/bookController');
const { isAuthenticated } = require('../middleware/Auth');

const router = express();


router.route('/book/:isbn').get(getBookDetail);
router.route('/search').get(findBooks);
router.route('/library').post(isAuthenticated, addBookToLibrary)
module.exports = router;
