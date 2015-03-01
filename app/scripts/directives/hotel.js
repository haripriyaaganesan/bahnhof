'use strict';

/**
 * @ngdoc directive
 * @name bahnhofApp.directive:hotel
 * @description
 * # hotel
 */
angular.module('bahnhofApp').directive('hotel', function () {


	return {
		templateUrl: 'views/_hotel.html',
		restrict: 'A',
		replace: true
	};
});
