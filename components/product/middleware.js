const Category = require("../category/model"),
{ sendError } = require("../../utils/response");
;

const validateData = async (req, res, next) => {
    try {
        const { name, quantity, price, category, status } = req.body;

        if (!name) throw { message: 'name required' }
        if (!quantity) throw { status: '422', message: 'quantity required' }
        if (!price) throw { status: '422', message: 'price required' }
        if (!category) throw { status: '422', message: 'category required' }

        const categoryGet = await Category.findById(category)
        if (!categoryGet) throw { status: '422', message: `category ${category} not found` }

        next();
    } catch (error) {
        return sendError(res, error.message)
    }

}

module.exports = { validateData }