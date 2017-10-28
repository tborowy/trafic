'use strict';

const business = require('../business/business.container.js');

module.exports = function (router) {
    router.route('/api/test').get(function (request, response) {
        business(request).templateManager().get(request.query).then(function (result) {
            response.send(result);
        }).catch(function (error) {
            applicationException.errorHandler(error, response);
        });
    });

    router.route('/api/file').post((request, response) => {
        business(request).fileManager().incoming_file(request)
            .then(() => {
                return business().fileManager().loadData()
            })
            .then((result) => {
                console.log('aaa');
                response.send(result || null);
            }).catch(function (error) {
            console.error(error)
        });
    });

};
