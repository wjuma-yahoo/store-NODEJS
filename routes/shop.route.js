const { Router } = require('express')
const ROUTER = Router()

const {
	GET_PRODUCTS,
	GET_INDEX,
	GET_CART,
	GET_CHECKOUT,
	GET_ORDERS,
	GET_PRODUCT_LIST
} =  require('../controllers/shop.controller')


ROUTER.get('/', GET_INDEX)
ROUTER.get('/product-list', GET_PRODUCT_LIST)
ROUTER.get('/shop', GET_PRODUCTS)
ROUTER.get('/cart', GET_CART)
ROUTER.get('/checkout', GET_CHECKOUT)
ROUTER.get('/orders', GET_ORDERS)

module.exports = ROUTER