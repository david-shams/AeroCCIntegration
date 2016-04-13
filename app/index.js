/**
 * Created by david1 on 4/5/16.
 */

var angular = require('angular');
var ngModule = angular.module('myApp', []);
console.log(ngModule);
require('angular-route');
require('./app');
require('./shopping/shopping');
require('./reshopping/reshopping');
var ko = require("knockout");


document.write("<h3 class='imphasis'>The power of require: " + require('./scripts') + "</h3>" );

require('../app/css/main.css');
document.write("<span class='works'>webpack works!</span><hr>");
document.write(require('./content.js'));