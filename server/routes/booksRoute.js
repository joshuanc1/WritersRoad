const express = require('express');
const { findBooks } = require('../controllers/bookController');

const router = express();


router.route('/books').get();
router.route('').get(findBooks);

module.exports = router;
