'use strict';

/**
 * @ngdoc directive
 * @name bahnhofApp.directive:spacer
 * @description
 * # spacer
 */
angular.module('bahnhofApp').directive('spacer', ['scrollService', function (scrollService) {

	var link = function($scope, element){

		// console.log(element);

		scrollService.init(element);

	};
	


	return {
		restrict: 'A',
		link: link
	};
}]);


