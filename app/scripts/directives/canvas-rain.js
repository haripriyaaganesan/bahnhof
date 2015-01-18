'use strict';

/**
 * @ngdoc directive
 * @name bahnhofApp.directive:canvasRain
 * @description
 * # canvasRain
 */
angular.module('bahnhofApp')
  .directive('canvasRain', ['canvasService', function (canvasService) {
    return {
      restrict: 'EA',
      link: function(){
		canvasService.setup();
	}
    };
  }]);
