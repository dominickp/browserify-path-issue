//#!/usr/bin/env node


var argv = require('yargs')

// Version
    .alias('v', 'version')
    .version(function() { return require('package').version; })
    .version(function() { return "1.2.2" })
    .describe('v', 'show version information')

    .help()
    .argv;

console.log(argv.command);