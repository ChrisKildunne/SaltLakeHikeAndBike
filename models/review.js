const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    text: { type: String },
    rating: { type: Number },
    trail: { type: Schema.Types.ObjectId, ref: 'Trail', required: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Review', reviewSchema);
