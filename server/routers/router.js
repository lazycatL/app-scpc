'use strict';

let express = require('express');
// let api = require('../../src/api/api');
let user = require('../api/userApi');



let router = express.Router();
router.get('/', function (req, res) {
 	 res.send('Home pagerouter');
});
router.get('/api/login',  function (req, res) {
  res.send('login');
});
router.post('/api/login', user.login); // 登录



module.exports = router;
