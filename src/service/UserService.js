const UserModels = require('../models/UserModels');

class UserService {
    constructor() {
        if (!UserService.instance) {
            // If not, create a new instance
            UserService.instance = this;
        }

        // Return the existing instance
        return UserService.instance;
    }

    async getUserInfo(condition) {
        return await UserModels.getUserInfo(condition)
    }

    async login(userInfo) {
        return await UserModels.login(userInfo)
    }

}


module.exports = new UserService();