'use strict';

/**
 * @ngdoc directive
 * @name bahnhofApp.directive:openNav
 * @description
 * # openNav
 */
angular.module('bahnhofApp').directive('openNav', function () {

	return {
		templateUrl: 'partials/_open-nav.html',
		restrict: 'EA',
		replace: true
	};
});
