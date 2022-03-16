const store = require('./store');

const getAll = async (req, res) => {
    try {

        const product = await store.get()
        console.log(product)

        if (Object.keys(product).length === 0 || (product).length === 0) throw { status: '422', message: 'There are no products' };


        return res.status(200).json({
            status: 200,
            message: "Ok",
            product
        });

    } catch (error) {

        return res.status(error.status || 500).json({
            status: error.status || 500,
            error: error.message || "Internal server error"
        })
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
        let id = await store.add(data)

        return res.status(201).json({
            status: 201,
            message: `Created`,
            body: {
                id
            }
        });

    } catch (error) {

        return res.status(error.status || 500).json({
            status: error.status || 500,
            error: error.message || "Internal server error"
        })
    }
}
const putProduct = async (req, res) => {
    try {
        console.log(req.body)
        const id = req.params.id;
        const  { name, description, quantity, price, category, status } = req.body;

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
        await store.update(id, data)

        return res.status(200).json({
            status: 200,
            message: `Updated`
        });

    } catch (error) {

        return res.status(error.status || 500).json({
            status: error.status || 500,
            error: error.message || "Internal server error"
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;

        await store.delete(id)

        return res.status(200).json({
            status: 200,
            message: `Product removed`
        });

    } catch (error) {

        return res.status(error.status || 500).json({
            status: error.status || 500,
            error: error.message || "Internal server error"
        })
    }
}

module.exports = {
    getAll,
    postProduct,
    deleteProduct,
    putProduct
}