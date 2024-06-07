const PariwisataModel = require('../models/Pariwisata.model')

// Get all Pariwisata
const getAllPariwisata = async (req, res) => {
    try {
        const pariwisatas = await PariwisataModel.find({});
        res.status(200).json(pariwisatas);
    } catch (error) {
        console.error(error.message); // Log the error for debugging
        res.status(500).json({ message: error.message });
    }
};

// Get single Pariwisata by ID
const getPariwisataById = async (req, res) => {
    try {
        const { id } = req.params;
        const pariwisata = await PariwisataModel.findById(id);
        if (!pariwisata) {
            return res.status(404).json({ message: 'Pariwisata not found' });
        }
        res.status(200).json(pariwisata);
    } catch (error) {
        console.error(error.message); // Log the error for debugging
        res.status(500).json({ message: error.message });
    }
};

// Create a new Pariwisata
const createPariwisata = async (req, res) => {
    try {
        const newPariwisata = await PariwisataModel.create(req.body);
        res.status(201).json(newPariwisata); // Use status 201 for created resources
    } catch (error) {
        console.error(error.message); // Log the error for debugging
        res.status(500).json({ message: error.message });
    }
};

// Update a Pariwisata by ID
const updatePariwisata = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPariwisata = await PariwisataModel.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!updatedPariwisata) {
            return res.status(404).json({ message: 'Pariwisata not found' });
        }
        res.status(200).json(updatedPariwisata);
    } catch (error) {
        console.error(error.message); // Log the error for debugging
        res.status(500).json({ message: error.message });
    }
};

// Delete a Pariwisata by ID
const deletePariwisata = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPariwisata = await PariwisataModel.findByIdAndDelete(id);
        if (!deletedPariwisata) {
            return res.status(404).json({ message: 'Pariwisata not found' });
        }
        res.status(200).json({ message: 'Pariwisata deleted successfully' });
    } catch (error) {
        console.error(error.message); // Log the error for debugging
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllPariwisata,
    getPariwisataById,
    createPariwisata,
    updatePariwisata,
    deletePariwisata
};
