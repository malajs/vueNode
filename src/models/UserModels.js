const {User, LoginUser} = require("../db/mongodb_users");

class UserModels {
    constructor() {
        if (!UserModels.instance) {
            // If not, create a new instance
            UserModels.instance = this;
        }

        // Return the existing instance
        return UserModels.instance;
    }

    static getInstate() {
        if (!this.instate) {
            this.instate = new UserModels()
        }
        return this.instate
    }

    async getUserInfo(condition) {
        return User.find(condition);
    }

    async getLoginUserInfo(condition) {
        return LoginUser.find(condition);
    }

    async login(loginInfo) {
        const searchInfo = {
            username: {
                $eq: loginInfo.username
            }
        }
        const isExistUsers = this.getUserInfo(searchInfo);
        if (!isExistUsers) {
            return {
                code: -1, msg: 'user is not exist'
            }
        }
        const isExistLogin = this.getLoginUserInfo(searchInfo);
        if (isExistLogin && !isExistLogin.multiTerminal) {
            return {
                code: -1, msg: 'user is not allow Login more'
            }
        }
        const userLogin = new LoginUser(loginInfo);
        userLogin.save();
        return {
            code: 0, msg: ""
        }
    }
}

module.exports = new UserModels()