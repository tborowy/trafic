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
    
    router.route('/api/file').post(function (request, response)
    {
        business(request).fileManager().incoming_file(request).then(function (result)
        {
            response.send(result);
        }).catch(function (error)
        {
            applicationException.errorHandler(error, response);
        });
    });

};
