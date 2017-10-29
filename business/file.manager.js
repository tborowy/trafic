'use strict';

const formidable = require('formidable');
const config = require('../config');
const csv = require('csvtojson');

function create(business) {
    function incoming_file(request) {
	    const fs = require('fs');
        const form = new formidable.IncomingForm();
        form.parse(request, (err, fields, file) => {
            const oldpath = file.file.path;
            const newpath = __dirname + '/../uploads/data.csv';
            fs.readFile(oldpath, function (err, data) {
			    if (err) throw err;
	            fs.writeFile(newpath, data, (err) => {
	                if (err) {
	                    throw err;
	                }
	                fs.unlink(oldpath, (err) => {
	                if (err) {
	                    throw err;
	                }
	                });
	            });
			});

        });
        return Promise.resolve();
    }

    function loader() {
        global.data = [];
        return new Promise((resolve) => {
            const csvData = csv(config.csvConverter);
            csvData.fromFile('uploads/data.csv')
                .on('header', headerData => {
                    global.header = headerData;
                    //return resolve(global.addressDict);
                    return resolve(headerData);
                })
                .on('json', jsonObj => {
                    global.data.push(jsonObj)
                })
                .on('done', () => {
                    console.log('Load data file done', global.data.length);
                });
        });
    }

    return {
        incoming_file: incoming_file,
        loadData: loader
    };
}

module.exports = {
    create: create
};
