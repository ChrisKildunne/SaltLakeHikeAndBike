const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

const trailSchema = new Schema({
  name: String,
  description: String,
  latitude: Number,
  longitude: Number,
  location: String,
}, {
  timestamps: true,
});

const apiTrail = mongoose.model('apiTrail', trailSchema);
const Trail = mongoose.model('BikingTrail', bikeSchema);

// Export both models as properties of an object
module.exports = {
  apiTrail,
  Trail,
};
