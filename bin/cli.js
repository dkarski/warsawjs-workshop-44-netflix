#!/usr/bin/env node

const yargs = require('yargs');

const argv = yargs
    .usage('INSERT_NAME\n\n  > $0 PARAMETER')
    .argv;

(async () => {
    console.log(argv);
})();
