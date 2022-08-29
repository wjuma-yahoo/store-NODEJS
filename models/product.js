const fs = require('fs')
const path = require('path')

const ROOT_DIR = require('../util/path')
const STORE_DATA_PATH = path.join(ROOT_DIR, 'data', 'product.json')

const GET_PRODUCTS_FROM_FILE = callback => {
	fs.readFile(STORE_DATA_PATH, 'utf8', (err, data) => {
		if(err) {
			callback([])
		} else {
			callback(JSON.parse(data))
		}
	});
}

class Product {

		constructor({
			id, 
			title,
			description,
			price,
			discountPercentage,
			rating,
			stock,
			brand,
			category,
			thumbnail,
			images
		}) {

			this.id = id
			this.title = title
			this.description = description
			this.price = price
			this.discountPercentage = 0
			this.rating = 0
			this.stock = 0
			this.brand = brand
			this.category = category
			this.thumbnail = thumbnail
			this.images = []

		}

		save(product, callback) {
			console.log(product)
			GET_PRODUCTS_FROM_FILE(callback)
		}

		static fetchAll(callback) {
			GET_PRODUCTS_FROM_FILE(callback)
		}
}

module.exports = Product



