const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myShema = new Schema({
    name: {
        type: String,
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    description: String,
    min: Number,
    max: Number,
    optional: Boolean,
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            price: Number,
            min: Number,
            max: Number
        }
    ],
    date: { type: Date, default: Date.now },
})

const model = mongoose.model('ProductOption', myShema);

module.exports = model;