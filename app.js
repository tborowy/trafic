'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

module.exports = function (config)
{
    const app = express();
    app.use(bodyParser.urlencoded({extended: false, limit: '1024mb'}));
    app.use(bodyParser.json({limit: '1024mb'}));
    app.use(express.static('front'));
    require('./REST/routes')(app, config);

    const server = http.createServer(app);
    server.listen(config.port, function ()
    {
        console.info('Http server listening on port', config.port);
    });

    return {rest: app, restServer: server};
};
