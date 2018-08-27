const express = require('express');
const router = express.Router();
// const redis = require('redis');
// const client = redis.createClient();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'API SERVER' });
});


module.exports = router;
