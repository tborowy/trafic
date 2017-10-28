'use strict';

const config = require('./config');

require('./app.js')(config);

// const _ = require('lodash');
//
// let data = [];
// const csvFilePath='';
// const csv=require('csvtojson');
// const converter=csv({
//     delimiter:[';'],
//     ignoreEmpty: true
// });
// converter.fromFile(csvFilePath)
//     .on('json',(jsonObj)=>data.push(jsonObj))
//     .on('done',(error)=>{
//         console.log('end');
//         console.log(data.length);
//     });
