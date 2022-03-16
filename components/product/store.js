const db = require('mongoose'),
    Model = require('./model'),
    config = require('../../config');

const getProducts = async () => {
    // const product = await Model.find()
    //     .populate('category')
    //     .exec();
    // return product;
    return new Promise((resolve, reject) =>{
        Model.find()
        .populate('category')
        .exec((err, product) =>{
            if (err) reject(err)
            resolve(product)
        });
    })
}

const addProduct = async (product) => {
    const myproduct = await Model.create(product);

    return myproduct._id;
}
const deleteProduct = async (id) => {
    const myproduct = await Model.findByIdAndDelete(id);
}

const updateProduct = async (id, data) => {
    console.log(id)
    console.log(data)
    const myproduct = await Model.findByIdAndUpdate(id, data);
    console.log(myproduct)
}

module.exports = {
    get: getProducts,
    add: addProduct,
    delete: deleteProduct,
    update: updateProduct
}