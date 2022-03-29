const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    status: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
})

const model = mongoose.model('Category', mySchema);

module.exports = model;
