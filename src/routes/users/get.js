var express = require('express');
var router = express.Router();

const UserDao = require("../../dao/UserDao")

/* GET users listing. */
router.get('/userInfo', async (req, res)=> {
    console.log(req)

  const userInfo =   await UserDao.getUserInfo({})
    res.send(userInfo)
});

module.exports = router;
