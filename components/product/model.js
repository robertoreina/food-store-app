const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myShema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    quantity: Number,
    price: Number,
    avatar: String,
    category: {type: Schema.ObjectId , ref: "Category"},
    status: Boolean,
    date: { type: Date, default: Date.now },
})

const model = mongoose.model('Product', myShema);

module.exports = model;