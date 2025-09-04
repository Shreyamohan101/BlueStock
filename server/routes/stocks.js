import express from 'express';
import Stock from '../models/Stock.js';

const router = express.Router();

// Get all stocks
router.get('/', async (req, res) => {
  try {
    const stocks = await Stock.find().sort({ marketCap: -1 });
    res.json(stocks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get stock by symbol
router.get('/:symbol', async (req, res) => {
  try {
    const stock = await Stock.findOne({ symbol: req.params.symbol });
    if (!stock) {
      return res.status(404).json({ message: 'Stock not found' });
    }
    res.json(stock);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create or update stock
router.post('/', async (req, res) => {
  try {
    const existingStock = await Stock.findOne({ symbol: req.body.symbol });
    if (existingStock) {
      Object.assign(existingStock, req.body);
      const updatedStock = await existingStock.save();
      res.json(updatedStock);
    } else {
      const stock = new Stock(req.body);
      const newStock = await stock.save();
      res.status(201).json(newStock);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;