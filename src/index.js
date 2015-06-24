// no babel-specific features allowed in this file,
// only in files you require below

require('../babel.conf');
var foo = require('./app').foo;

console.log("foo(55) ===", foo(55));
