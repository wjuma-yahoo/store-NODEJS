const PRODUCT = require('../models/product')

exports.GET_PRODUCTS = (req, res) => {

	PRODUCT.fetchAll(products => {

		res.render('shop/shop', {
			pageTitle: 'Shop',
			path: '/shop',
			products
		})
	})

}

exports.GET_PRODUCT_LIST = (req, res) => {
	res.render('shop/product-list', {
		pageTitle: 'Product List',
		path: '/products'
	})
}

exports.GET_INDEX = (req, res) => {
	res.render('shop/index', {
		pageTitle: 'Products',
		path: '/'
	})
}

exports.GET_CART = (req, res) => {
	res.render('shop/cart', {
		pageTitle: 'Cart',
		path: '/cart'
	})
}

exports.GET_CHECKOUT = (req, res) => {
	res.render('shop/checkout', {
		pageTitle: 'Checkout',
		path: '/checkout'
	})
}

exports.GET_ORDERS = (req, res) => {
	res.render('shop/orders', {
		pageTitle: 'Orders',
		path: '/orders'
	})
}
