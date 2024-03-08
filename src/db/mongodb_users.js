//引入mongodb模块，获得客户端对象
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//连接字符串
const DB_CONN_STR = 'mongodb://localhost:27017/users';

// 获取架构实例

//设计集合结构（表结构）
let userSchema = new Schema({
    username: {
        type: String,
        required: true //必须有
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String
    },
    createTime: {
        type: Number,
    },
    phone_num: {
        type: String,
    },
    email: {
        type: String,
    }
})
//设计集合结构（表结构）
let loginUserSchema = new Schema({
    username: {
        type: String,
        required: true //必须有
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String
    },
    createTime: {
        type: Number,
    },
    phone_num: {
        type: String,
    },
    email: {
        type: String,
    },
    multiTerminal: {
        type: Boolean
    }
})

//操作多张“表”的话，需要定义多个Model
let User = mongoose.model('users', userSchema);
let LoginUser = mongoose.model('login_users', loginUserSchema);

try {
    mongoose.connect(DB_CONN_STR) //连接数据库
    console.log("数据库连接成功")
} catch (error) {
    console.log("数据库连接有误，请检查数据库连接", error)

}

module.exports = {
    User,
    LoginUser
};
