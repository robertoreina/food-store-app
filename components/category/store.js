const db = require('mongoose'),
    Model = require('./model'),
    ProductModel = require('../product/model')
    config = require('../../config');
    
const getCategory = async () => {
    let category = await Model.find();

    let data = await Promise.all(
        category.map(async (el) => {

            let product = await ProductModel.find({ category: el._doc._id });
            let productByCategory = [{ ...el._doc, product }]
            return productByCategory;
        }))
    return data;
}
const addCategory = async (data) => {
    const category = await Model.create(data);
    return category._id;
}
const deleteCategory = async (id) => {
    // const myproduct = await Model.findByIdAndDelete(id);
}

module.exports = {
    get: getCategory,
    add: addCategory,
    delete: deleteCategory,
}