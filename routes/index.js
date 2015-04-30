var express = require('express');
var router = express.Router();
var config = require('config');

//home page
router.get('/', function(req, res, next) {
  res.render('index', {
    title: config.get('site.front'),
    banner: config.get('content.front.banner'),
    home_title: config.get('site.front')
  });
});
// download page
router.get('/download', function(req, res, next) {
  res.render('download', {
    title: config.get('site.front'),
    banner: config.get('content.front.banner'),
    home_title: config.get('site.front')
  });
});

module.exports = router;
