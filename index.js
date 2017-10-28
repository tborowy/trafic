'use strict';

const config = require('./config');

require('./app.js')(config);


const csv = require('csvtojson');
const csvTerryt = csv(config.csvConverter);
const csvAddress = csv(config.csvConverter);


const Promise = require('bluebird');
global.header = null;
global.terryt = [];
global.addressDict = [];

csvTerryt.fromFile('terryt.csv')
    .on('json', jsonObj => global.terryt.push(jsonObj))
    .on('done', () => console.log('terryt file loaded', global.terryt.length));

csvAddress.fromFile('addressDict.csv')
    .on('json', jsonObj => global.addressDict.push(jsonObj))
    .on('done', () => console.log('address dictionary loaded', global.addressDict.length));
