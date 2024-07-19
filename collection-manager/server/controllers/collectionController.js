const collectionService = require('../services/collectionService');

const getCollections = async (req, res) => {
    res.json(await collectionService.getCollections());
};

const getCollectionData = async (req, res) => {
    const collection = req.params.collection;

    try {
        const data = await collectionService.getCollectionData(collection);
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: error.message });
    }
};

const getCollectionColumns = async (req, res) => {
    const collection = req.params.collection;

    try {
        const columns = await collectionService.getCollectionColumns(collection);
        res.json(columns);
    } catch (error) {
        console.error('Error fetching columns:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getCollections,
    getCollectionData,
    getCollectionColumns,
};
