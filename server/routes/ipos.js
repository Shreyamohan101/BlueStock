import express from 'express';
import IPO from '../models/IPO.js';

const router = express.Router();

// Get all IPOs
router.get('/', async (req, res) => {
  try {
    const ipos = await IPO.find().sort({ expectedDate: 1 });
    res.json(ipos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get IPO by ID
router.get('/:id', async (req, res) => {
  try {
    const ipo = await IPO.findById(req.params.id);
    if (!ipo) {
      return res.status(404).json({ message: 'IPO not found' });
    }
    res.json(ipo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new IPO
router.post('/', async (req, res) => {
  try {
    const ipo = new IPO(req.body);
    const newIPO = await ipo.save();
    res.status(201).json(newIPO);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;