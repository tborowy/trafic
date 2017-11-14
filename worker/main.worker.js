'use strict';

const _ = require('lodash');
const moment = require('moment');

setTimeout(()=> {
    global.status = 'DONE';
    global.endDate = moment.now();
    global.duration = moment.utc(moment(global.endDate).diff(moment(global.startdate))).format("ss");
    console.log(global.duration)
    }, 10000);