'use strict';

const config = require('../config');

module.exports = function (router, config)
{
    require('./template.endpoint')(router);

};
