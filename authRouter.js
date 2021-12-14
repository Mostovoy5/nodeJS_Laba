const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require("express-validator")
const authMiddleware = require('./middlewaree/authMiddleware')

router.post('/registration', [
    check('username', "Ім'я користувача не може бути пустим").notEmpty() ,
    check('password', "Пароль не повинен бути більше 4 і меньше 10 символів").isLength({min:4,max:10})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', authMiddleware, controller.getUsers)

module.exports = router