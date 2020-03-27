#!/usr/bin/env node
'use strict';
const meow = require('meow');
const {isNpm} = require('is-npm');

meow(`
	Usage
	  $ is-npm

	Exits with code 0 if running as an npm script, otherwise code 2
`);

process.exitCode = isNpm ? 0 : 2;
