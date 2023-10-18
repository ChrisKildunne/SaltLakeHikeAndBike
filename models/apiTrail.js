const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

// Export both models as properties of an object
module.exports = {
  apiTrail,
  
};
