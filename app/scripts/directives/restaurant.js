'use strict';

/**
 * @ngdoc directive
 * @name bahnhofApp.directive:restaurant
 * @description
 * # restaurant
 */
angular.module('bahnhofApp')
  .directive('restaurant', function () {
    return {
      templateUrl: 'views/_restaurant.html',
      restrict: 'A',
      replace: true
    };
  });
