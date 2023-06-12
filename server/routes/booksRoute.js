const express = require('express');
const { findBooks, getBookDetail } = require('../controllers/bookController');

const router = express();


router.route('/book/:isbn').get(getBookDetail);
router.route('/search').get(findBooks);

module.exports = router;
