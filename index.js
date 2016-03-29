#!/usr/bin/env node
require('epipebomb')();
var fs = require('fs');
var parser = require('./json_parser');

if ((process.argv.length) !== 3 && (process.argv.length !== 4)) {
    console.log("node index.js somefile.js [key]");
    process.exit(-1);
}

var file = process.argv[2];
var search_key = process.argv[3];

fs.readFile(file, 'utf8', function (err, data) {
     if (err) {
        return console.log(err);
     }
     parser(data, function (key, line) {
        if (!search_key || (search_key && (key.indexOf(search_key) !== -1))) {
            console.log(key, line);
        } 
     });
});     
