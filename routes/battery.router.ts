const Router = require('express')
const batteryController = require('../controllers/battery.controller.js')

const router = new Router()

router.get('/all', batteryController.getAll)
router.get('/:id', batteryController.getOne)
router.post('/filter', batteryController.getFilter)
router.post('/create', batteryController.create)
router.put('/update', batteryController.update)
router.delete('/delete', batteryController.delete)

module.exports = router