const express = require('express');
const router = express.Router();
const collectionController = require('../controllers/collectionController');

router.get('/collections', collectionController.getCollections);
router.get('/:collection', collectionController.getCollectionData);
router.get('/:collection/columns', collectionController.getCollectionColumns);

module.exports = router;
