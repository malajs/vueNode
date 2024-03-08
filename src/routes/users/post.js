const express = require('express');
const router = express.Router();

const userDao = require("../../dao/UserDao")

/* GET users listing. */
router.post('/', function (req, res) {
    res.send('respond with a resource');
});

// 登录接口
router.post("/login", (req, res) => {
    const params = req.body;



})

module.exports = router;
