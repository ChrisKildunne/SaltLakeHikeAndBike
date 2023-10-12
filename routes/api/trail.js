const express = require('express');
const router = express.Router();
const trailsCtrl = require('../../controllers/api/trail')

router.post('/', trailsCtrl.create)

module.exports = router