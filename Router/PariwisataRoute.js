const express = require('express');
const {
    getAllPariwisata,
    getPariwisataById,
    createPariwisata,
    updatePariwisata,
    deletePariwisata
} = require('../controllers/pariwisataController');

const router = express.Router();

router.get('/', getAllPariwisata);
router.get('/:id', getPariwisataById);
router.post('/', createPariwisata);
router.put('/:id', updatePariwisata);
router.delete('/:id', deletePariwisata);

module.exports = router;
