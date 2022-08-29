const { v4: uuidv4 } = require('uuid')
const PRODUCT = require('../models/product')

exports.GET_ADD_PRODUCT = (req, res) => {
	res.render('admin/add-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product'
	})
}

exports.POST_ADD_PRODUCT = (req, res) => {

	const product = new PRODUCT(req.body)
	product.id = uuidv4()

	product.save(product, () => {
		res.redirect('/shop')
	});

}

exports.GET_PRODUCTS = (req, res) => {
	res.render('admin/products', {
		pageTitle: 'Admin Producs',
		path: '/admin/products'
	})
}