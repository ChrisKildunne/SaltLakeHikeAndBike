const express = require('express');
const router = express.Router();
const trailsCtrl = require('../../controllers/api/trails')

router.post('/', trailsCtrl.create)

module.exports = router