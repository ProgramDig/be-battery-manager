const Router = require('express')
const authController = require('../controllers/auth-controller')

const router = new Router()

router.post('/registration', authController.registration)
router.get('/users', authController.getUsers)

module.exports = router