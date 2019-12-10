const mongoose = require('mongoose')

const OrderDetailSchema = mongoose.Schema({
	idOrder: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'orders'
	},
	productOrder: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'products'
	},
	qtyOrder: {
		type: Number,
		required: true
	},
	subTotalOrder: {
		type: Number,
		required: true
	}
},{
	timestamps : true
})

const OrderDetail = module.exports = mongoose.model('orderDetails', OrderDetailSchema) 