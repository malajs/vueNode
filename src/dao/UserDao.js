const UserService = require('../service/UserService')

class UserDao {
    constructor() {
        if (!UserDao.instance) {
            // If not, create a new instance
            UserDao.instance = this;
        }

        // Return the existing instance
        return UserDao.instance;
    }

    async getUserInfo(condition) {
        return await UserService.getUserInfo(condition)
    }

    async login(req, res) {
        try {
            const userInfo = await UserService.getUserInfo({
                username: {
                    $eq: res.username
                }
            })

            if (!userInfo) {
                res.send({
                    status: 500, msg: 'user is not exist'
                })
                return;
            }

            await UserService.login
        } catch (e) {

        }

    }

}


module.exports = new UserDao()