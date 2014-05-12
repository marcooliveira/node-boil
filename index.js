#!/usr/bin/env node
'use strict';

var request       = require('request'),
    os            = require('os'),
    DecompressZip = require('decompress-zip'),
    fs            = require('fs'),
    path          = require('path'),
    shelljs       = require('shelljs'),
    conf          = require('rc')('boil', {
        repository: 'https://github.com/marcooliveira/node-boilerplate-files/archive/master.zip',
        success: 'Boiled!'
    }),
    unzipper

;

var tmpFile = path.join(os.tmpdir(), 'boilerplate-files.zip');

var req = request(conf.repository);

req.on('end', function () {
    unzipper = new DecompressZip(tmpFile);
    unzipper.extract({
        filter: function (file) {
            return file.type !== 'SymbolicLink';
        }
    });

    unzipper.on('error', function (err) {
        console.error('Error boiling:', err);
    });

    unzipper.on('extract', function (log) {
        shelljs.mv('./node-boilerplate-files-master/.*', './');
        shelljs.mv('./node-boilerplate-files-master/*', './');
        shelljs.rm('-fr', './node-boilerplate-files-master');

        console.log(conf.success);
    });

});

req.pipe(fs.createWriteStream(tmpFile));
