const store = require('./store');

const getAll = async (req, res) => {
    try {

        const category = await store.get()

        if (Object.keys(category).length === 0 || (category).length === 0) throw { status: '422', message: 'There are no categories' };

        return res.status(200).json({
            status: 200,
            message: "Ok",
            category
        });

    } catch (error) {
        console.log(error)
        return res.status(error.status || 500).json({
            status: error.status || 500,
            error: error.message || "Internal server error"
        })
    }
}

const postCategory = async (req, res) => {
    try {
        const {name, status} = req.body;

        let data ={
            name,
            status
        }
        let id = await store.add(data)

        return res.status(200).json({
            status: 200,
            message: `Category Created`,
            body:{
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
const deleteCategory = async (req, res) => {
//
}

module.exports = {
    getAll,
    postCategory,
    deleteCategory,
}