var express = require('express');
var router = express.Router();











//This needs to stay at the bottom of this route file in order to work correctly
router.get('*', function(req, res, next) {
  res.sendFile('index.html', {
    root: __dirname + '/../public/'
  });
});

module.exports = router;
