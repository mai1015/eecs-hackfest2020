const fs = require('fs');
var a = require('./usa-and-canada.geo.json');
var b = require('./Canada.json');
a.features.push(...b.features);
var c = JSON.stringify(a);
fs.writeFileSync('usa-and-canada.geo.json', c);
