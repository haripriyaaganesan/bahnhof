'use strict';

/**
 * @ngdoc function
 * @name bahnhofApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bahnhofApp
 */
angular.module('bahnhofApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
