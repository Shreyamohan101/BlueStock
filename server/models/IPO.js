import mongoose from 'mongoose';

const ipoSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  symbol: {
    type: String,
    required: true
  },
  priceRange: {
    min: Number,
    max: Number
  },
  shares: {
    type: Number,
    required: true
  },
  expectedDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['upcoming', 'active', 'completed'],
    default: 'upcoming'
  },
  description: {
    type: String,
    required: true
  },
  sector: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('IPO', ipoSchema);