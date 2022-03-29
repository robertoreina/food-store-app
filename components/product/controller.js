const Product = require('./model'),
    { sendError, sendSuccess } = require("../../utils/response");

const getAll = async (req, res) => {
    try {
        const product = await Product.find().populate('category options options.products', {productId: 0});
        return sendSuccess(res, product)
    } catch (error) {
        return sendError(res, error.message)
    }
}

const postProduct = async (req, res) => {
    try {
        const { name, description, quantity, price, category, status } = req.body;

        let filelUrl = '';
        if (req.file) filelUrl = req.protocol + '://' + req.get('host') + '/files/' + req.file.filename;

        let data = {
            name,
            description,
            quantity,
            price,
            avatar: filelUrl,
            category,
            status,
        }
        let newProduct = await Product.create(data);
        if (!newProduct) throw { message: 'Something went wrong, try later' };

        return sendSuccess(res, { message: "create product successfull" });

    } catch (error) {
        return sendError(res, error.message)
    }
}
const putProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, description, quantity, price, category, status } = req.body;

        let filelUrl = '';
        if (req.file) filelUrl = req.protocol + '://' + req.get('host') + '/files/' + req.file.filename;

        let data = {
            name,
            description,
            quantity,
            price,
            avatar: filelUrl,
            category,
            status,
        }
        let updProduct = await Product.findByIdAndUpdate(id, data);
        if (!updProduct) throw { message: 'Something went wrong, try later' };

        return sendSuccess(res, { message: "update product successfull" })
    } catch (error) {
        return sendError(res, error.message)
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        
        let deleteProduct = await Product.findByIdAndDelete(id);
        if (!deleteProduct) throw { message: 'Something went wrong, try later' };
        return sendSuccess(res, { message: "delete product successfull" });
        
    } catch (error) {
        return sendError(res, error.message);
    }
}

module.exports = {
    getAll,
    postProduct,
    deleteProduct,
    putProduct
}