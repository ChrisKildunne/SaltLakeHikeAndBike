const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/review')

router.post('/:productId',ensureLoggedIn, reviewsCtrl.create);