const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bikeSchema = new Schema({
    name: String,
    difficulty: {
      type: String,
      enum: ['Easy', 'Moderate', 'Hard']
    },
    mileage: Number,
    trailStyle: {
      type: String,
      enum: ['Tech', 'Flow', 'Jump']
    },
    description: String
  }, {
      timestamps: true
  });

  const Trail = mongoose.model('BikingTrail', bikeSchema)
  module.exports = Trail