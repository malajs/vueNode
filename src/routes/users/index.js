var express = require('express');
var router = express.Router();

const userPost =require("./post")
const userGet =require("./get")
/* GET users listing. */
router.get('*', userGet);

/* GET users listing. */
router.post('*', userPost);

module.exports = router;
