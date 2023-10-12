const express = require('express');
const router = express.Router();
const trailsCtrl = require('../../controllers/api/trails')

router.post('/', trailsCtrl.create)
router.get('/',trailsCtrl.index)
router.get('/:id', trailsCtrl.show)

module.exports = router