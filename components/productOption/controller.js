const Option = require('./model'),
      Product = require('../product/model'),
    { sendError, sendSuccess } = require("../../utils/response");



const postOption = async (req, res) => {
    try {
        const { name, description, min, max, optional = false, products } = req.body;
        const productId = req.params.productId;

        const product = await Product.findById(productId);
        if (!product) throw { message: 'Something went wrong, try later' };

        let data = {
            name,
            description,
            productId,
            min,
            max,
            optional,
            products
        }
        const newOption = await Option.create(data);
        if (!newOption) throw { message: 'Something went wrong, try later' };
        
        product.options = product.options.concat(newOption._id);
        await product.save()

        return sendSuccess(res, { message: "create option successfull" });

    } catch (error) {
        return sendError(res, error.message)
    }
}

module.exports = {postOption}