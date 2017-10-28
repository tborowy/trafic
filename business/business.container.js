'use strict';

const templateManager = require('./template.manager');


function getContext(request)
{
    return {user: request && request.user};
}

function getter(manager, request)
{
    return function ()
    {
        return manager.create(getContext(request), this);
    };
}

module.exports = function createBusinessContainer(request)
{
    return {
        templateManager: getter(templateManager, request),
    };
};
