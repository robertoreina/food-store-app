const store = require('./store');

const login = async (req, res) => {
    try {
        const { name, status } = req.body;

        let data = {
            name,
            status
        }
        let id = await store.add(data)

        return res.status(200)
            .cookie('test', "test")
            .json({
                status: 200,
                message: `Category Created`,
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

module.exports = {
    login,
    sendCode,
}