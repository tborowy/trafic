'use strict';
const Promise = require('bluebird');

function create(business)
{
    function start()
    {
        global.startdate = moment.now();
        global.status = 'PROCESSING';
        return Promise.resolve(true);
    }

    function status()
    {
        return Promise.resolve({status:global.status});
    }

    return {
        start: start,
        status: status
    };
}

module.exports = {
    create: create
};
