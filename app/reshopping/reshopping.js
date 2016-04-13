'use strict';

angular.module('myApp.reshopping', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/reshopping', {
    // templateUrl: 'reshopping/reshopping.html',
    templateUrl: './WebContent/Views/view1.tmpl.html',
    controller: 'ReshoppingCtrl'
  });
}])

.controller('ReshoppingCtrl', [function() {

}]);