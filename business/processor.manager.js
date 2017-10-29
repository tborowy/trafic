'use strict';
const Promise = require('bluebird');
const moment = require('moment');

function create(business)
{
    function start()
    {
        global.startdate = moment.now();
        global.status = 'PROCESSING';
        setTimeout(()=>{
            require('../worker/main.worker');
        }, 0);
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
