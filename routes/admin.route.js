const { Router } = require('express')
const ROUTER = Router()

const {
	GET_ADD_PRODUCT,
	POST_ADD_PRODUCT,
	GET_PRODUCTS
} =  require('../controllers/admin.controller')


ROUTER.get('/add-product', GET_ADD_PRODUCT)
ROUTER.post('/add-product', POST_ADD_PRODUCT)
ROUTER.get('/products', GET_PRODUCTS)

module.exports = ROUTER