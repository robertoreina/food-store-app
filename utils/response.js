module.exports = {
    sendError : (res,message) => {
        res.status(200).json({
            status : false,
            data : {
                error : message
            }
        })
    },
    sendSuccess : (res,data) => {
        res.status(200).json({
            status : true,
            data : data
        })
    }
}