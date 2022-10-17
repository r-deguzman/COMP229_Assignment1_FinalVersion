/*
Student's Name: Ruth Jocelyn De Guzman
Student ID: 301224922
Date: October 16, 2022
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
