const express = require('express');
const router = express.Router();
const { getItemCategories } = require('../controllers/categories');

// Added route
router.get('/:id', getItemCategories);

module.exports = router;