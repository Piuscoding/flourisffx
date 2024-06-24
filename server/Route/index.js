
const express = require('express')
const router = express.Router()
const controllers = require('../Controller/constrollers')



router.get('/', controllers.homePage)



module.exports = router;