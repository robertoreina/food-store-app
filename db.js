const mongoose = require('mongoose'),
    config = require('./config');

mongoose.Promise = global.Promise;

async function connect() {

    const uri = `mongodb://${config.database.host}:${config.database.port}/${config.database.name}`
    await mongoose.connect(uri, {
        useNewUrlParser: true
    })
}

module.exports = connect;