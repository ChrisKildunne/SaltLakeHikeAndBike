const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/review')

router.post('/:trailId', reviewsCtrl.create);
router.get('/:trailId', reviewsCtrl.getAll)
router.delete('/:trailId/:reviewId', reviewsCtrl.deleteReview)
router.put('/:trailId/:reviewId', reviewsCtrl.editReview)

module.exports = router