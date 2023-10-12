const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bikeSchema = new Schema({
    name: String,
    difficulty: {
      type: String,
      enum: ['Easy', 'Moderate', 'Hard']
    },
    mileage: Number,
    rating: {
      type: Number,
      enum:[1 , 2 , 3 , 4 , 5]
    },
    trailStyle: {
      type: String,
      enum: ['Tech', 'Flow', 'Jump']
    },
    description: String,
     photos: [{ 
      type: Schema.Types.ObjectId,
      ref: 'Photo',
        }],
    review:[reviewSchema]
  }, {
      timestamps: true
  });

  const Trail = mongoose.model('BikingTrail', bikeSchema)
  module.exports = Trail