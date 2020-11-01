const express = require('express');
const router = express.Router();
const { searchItems, getItemDetail } = require('../controllers/items');

router.get('/', searchItems);

router.get('/:id', getItemDetail);

module.exports = router;