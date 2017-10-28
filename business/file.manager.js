'use strict';

const formidable = require('formidable');
const config = require('../config');
const csv = require('csvtojson');

function create(business) {
    function incoming_file(request) {
        const form = new formidable.IncomingForm();
        form.parse(request, (err, fields, files) => {
            const oldpath = files.filetoupload.path;
            const newpath = __dirname + '../uploads/data.csv';
            fs.rename(oldpath, newpath, (err) => {
                if (err) {
                    throw err;
                }
                Promie.resolve();
            });
        });
        return Promise.resolve();
    }

    function loader() {
        global.data = [];
        return new Promise((resolve) => {
            const csvData = csv(config.csvConverter);
            csvData.fromFile('../uploads/data.csv')
                .on('header', headerData => {
                    console.log('header', headerData);
                    global.header = headerData
                })
                .on('json', jsonObj => {
                    console.log('data', JSON.stringify(jsonObj));
                    global.data.push(jsonObj)
                })
                .on('done', () => {
                    console.log('DONE:', global.header, global.data.length);
                    return resolve(global.header);
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
