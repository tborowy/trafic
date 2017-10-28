'use strict';
const Promise = require('bluebird');
const formidable = require('formidable');

function create(context, business)
{
    function incoming_file(request)
    {
        
	    var form = new formidable.IncomingForm();
	    form.parse(req, function (err, fields, files) {
	      var oldpath = files.filetoupload.path;
	      var newpath = __dirname + '../uploads/data.csv';
	      fs.rename(oldpath, newpath, function (err) {
	        if (err) throw err;
	        res.write('File uploaded and moved!');
	        res.end();
	      });
        return Promise.resolve({text:'fileManager:POST'});
    }

    return {
        incoming_file: incoming_file
    };
}

module.exports = {
    create: create
};
