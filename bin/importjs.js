#!/usr/bin/env node

// eslint-disable-next-line import/no-unresolved
const { importjs } = require('../build/importjs.js');

importjs(process.argv);
