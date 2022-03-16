const express = require('express'),
product = require('../components/product/network'),
category = require('../components/category/network')


const routes =  (server) => {
    server.use('/app/product', product);
    server.use('/app/category', category);
}

module.exports = routes;