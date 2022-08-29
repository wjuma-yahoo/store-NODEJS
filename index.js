const express = require('express')
const path = require('path')

const ROOT_DIR = require('./util/path')
const SHOP_ROUTES = require('./routes/shop.route')
const ADMIN_ROUTES = require('./routes/admin.route')

const APPLICATION = express()
const PORT = process.env.PORT || 3000

APPLICATION.set('view engine', 'ejs')

APPLICATION.use(express.urlencoded({ extended: false }))
APPLICATION.use(express.json())
APPLICATION.use(express.static(path.join(ROOT_DIR, 'public')))

APPLICATION.use(SHOP_ROUTES)
APPLICATION.use('/admin', ADMIN_ROUTES)

APPLICATION.listen(
	PORT,
	console.log(`Server running on port ${PORT}`)
)