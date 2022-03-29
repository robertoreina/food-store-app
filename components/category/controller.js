const { sendSuccess, sendError } = require('../../utils/response'),
Category = require('./model'),
    Product = require('../product/model');

const getAll = async (req, res) => {
    try {
        let categories = await Category.find();
        let data = await Promise.all(
            categories.map(async (el) => {
                let product = await Product.find({ category: el._doc._id }, {category: 0}).populate("options");
                return { ...el._doc, product }
            }))
        return sendSuccess(res, data);
    } catch (error) {
        return sendError(res, error.message);
    }
}

const postCategory = async (req, res) => {
    try {
        const { name, status } = req.body;

        let data = {
            name,
            status
        }
        const newCategory = await Category.create(data);
        if (!newCategory) throw { message: 'Something went wrong, try later' };

        return sendSuccess(res, { message: "create category successfull" });
    } catch (error) {
        return sendError(res, error.message);
    }
}

const updateCategory = async (req, res) => {
    try {
        let { name, status } = req.body;

        let data = {
            name,
            status
        }
        const updCategory = await Category.findByIdAndUpdate(req.params.id, data);
        if (!updCategory) throw  { message: 'Something went wrong, try later' }

        return sendSuccess(res, {message:'update category successfull'});

    } catch (error) {
        return sendError(res, error.message);
    }
}

module.exports = {
    getAll,
    postCategory,
    updateCategory,
}