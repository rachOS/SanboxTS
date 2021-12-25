const fs = require('fs');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('./__stubs__/index.html');
const page = new JSDOM(html);

module.exports = page;
