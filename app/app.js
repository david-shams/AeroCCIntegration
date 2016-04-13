/**
 * Created by david1 on 4/12/16.
 */
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.shopping',
    'myApp.reshopping'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/shopping'});
}]);
