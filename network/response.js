exports.success = (req, res, body, status) =>{
    
    res.status(status || 200).json(body)
}

exports.error = (req, res, error) =>{
    res.status(status || 200).json(message)

}