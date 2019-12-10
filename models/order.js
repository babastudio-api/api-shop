const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
	userOrder: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	totalOrder: {
		type: Number,
		required: true
	}
},
{
	timestamps: true
})

const Order = module.exports = mongoose.model('orders', OrderSchema) 