'use strict';

const business = require('../business/business.container.js');

module.exports = function (router)
{
    router.route('/api/test').get(function (request, response)
    {
        business(request).templateManager().get(request.query).then(function (result)
        {
            response.send(result);
        }).catch(function (error)
        {
            applicationException.errorHandler(error, response);
        });
    });

};
