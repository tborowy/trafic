'use strict';

const templateManager = require('./template.manager');
const fileManager = require('./file.manager');


function getter(manager)
{
    return function ()
    {
        return manager.create(this);
    };
}

module.exports = function createBusinessContainer(request)
{
    return {
        templateManager: getter(templateManager, request),
        fileManager: getter(fileManager, request),
    };
};
