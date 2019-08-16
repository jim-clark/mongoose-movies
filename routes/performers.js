var express = require('express');
var router = express.Router();
var performersCtrl = require('../controllers/performers');

router.get('/performers/new', performersCtrl.new);

module.exports = router;