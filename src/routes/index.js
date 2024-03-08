var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

const user = require("./users");
/* GET home page. */
router.use('/users', user);

//extended:false 不使用第三方模块处理参数，使用Nodejs内置模块querystring处理
router.use(bodyParser.urlencoded({extended:false}))

module.exports = router;
