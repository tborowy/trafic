'use strict';

const _ = require('lodash');
const Promise = require('bluebird');

const csvTerryt = csv(config.csvConverter);
const csvAddress = csv(config.csvConverter);
const csv = require('csvtojson');

const config = require('./config');

global.header = null;
global.terryt = [];
global.addressDict = {};

csvTerryt.fromFile('terryt.csv')
    .on('json', jsonObj => global.terryt.push(jsonObj))
    .on('done', () => console.log('terryt file loaded', global.terryt.length));

csvAddress.fromFile('addressDict.csv')
    .on('json', jsonObj => {
        _.set(global,
            'addressDict.' +
            _.get(jsonObj, 'TYP_CIAGU_KOMUNIKACYJNEGO') + '.' +
            _.get(jsonObj, 'ULICA') + '.' +
            _.get(jsonObj, 'ADR_NR').toString(),
            {
                addr: _.get(jsonObj, 'ADR_NR'),
                x: _.get(jsonObj, 'GEOM_X'),
                y: _.get(jsonObj, 'GEOM_Y')
            });
    })
    .on('done', () => console.log('address dictionary loaded'));

require('./app.js')(config);
