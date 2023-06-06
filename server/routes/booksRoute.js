const express = require('express');
const { findBook } = require('../controllers/bookController');

const router = express();


router.route('/search/books').get();
router.route('/search/books/:isbn').get(findBook);
