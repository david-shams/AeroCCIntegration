'use strict';

angular.module('myApp.shopping', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/shopping', {
    templateUrl: 'shopping/shopping.html',
    controller: 'ShoppingCtrl'
  });
}])
.controller('ShoppingCtrl', [function() {

}]);