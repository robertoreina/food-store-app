const express = require('express'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    router = require('./network/routes'),
    connect = require('./db');

var app = express();

app.use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(express.static('public'));

router(app);


connect()
    .then((res) => {
        console.log(`DB connected`)
        app.listen(config.port, () => {
            console.log(`server started on port ${config.port}`)
        })
    }
    ).catch(err => console.log(err));

