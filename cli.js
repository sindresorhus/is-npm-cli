#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import {isNpm} from 'is-npm';

meow(`
	Usage
	  $ is-npm

	Exits with code 0 if running as an npm script, otherwise code 2
`, {
	importMeta: import.meta,
});

process.exitCode = isNpm ? 0 : 2;
