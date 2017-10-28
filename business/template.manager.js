'use strict';
const Promise = require('bluebird');

function create(context, business)
{
    function get()
    {
        return Promise.resolve({text:'testManager:GET'});
    }

    return {
        get: get
    };
}

module.exports = {
    create: create
};
