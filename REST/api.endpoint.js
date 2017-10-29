'use strict';

const business = require('../business/business.container.js');
const Promise = require('bluebird');

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
        	.then(() => Promise.delay(3000))
            .then(() => {
                return business().fileManager().loadData()
            })
            .then((result) => {
                response.send(result);
            }).catch(function (error) {
            console.error(error)
        });
    });

    router.route('/api/start').post((request, response) => {
        business(request).processorManager().start(request)
            .then((result) => {
                response.send(result);
            }).catch(function (error) {
            console.error(error)
        });
    });

    router.route('/api/status').post((request, response) => {
        business(request).processorManager().status(request)
            .then((result) => {
                response.send(result);
            }).catch(function (error) {
            console.error(error)
        });
    });

};
