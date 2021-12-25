const express = require('express')
const router = express.Router()
const homeControllers = require('../app/controllers/homeControllers')


router.get('/detailProduct', homeControllers.detailProduct)
router.get('/account', homeControllers.account)
router.get('/myorder', homeControllers.myorder)
router.get('/products', homeControllers.products)
router.get('/productAll', homeControllers.productAll)
router.get('/confirm', homeControllers.confirm)
router.get('/purchase', homeControllers.purchase)
router.get('/aboutUs', homeControllers.aboutUs)
router.get('/signIn', homeControllers.signIn)
router.get('/', homeControllers.showHome)


module.exports = router