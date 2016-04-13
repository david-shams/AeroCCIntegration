/**
 * Created by david1 on 4/5/16.
 */

var angular = require('angular');
var ngModule = angular.module('myApp', []);
console.log(ngModule);
require('angular-route');
require('./app');
require('./shopping/shopping');
// require('./shopping/shopping.html');
require('./reshopping/reshopping');
// require('./reshopping/reshopping.html');
var ko = require("knockout");


document.write("The power of require: " + require('./scripts') );

//require('!style!css!css/main.css');//todo: again this will not work. Add current directory ./
//require('css/main.css');//todo: again this will not work. Add current directory ./
require('../app/css/main.css');//where bundle.js file is located todo: in relation to this
document.write('webpack works!');
//document.write(require('content.js'));//todo: this will not work even if both in the same directory
document.write(require('./content.js'));