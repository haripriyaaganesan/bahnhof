'use strict';

/**
 * @ngdoc directive
 * @name bahnhofApp.directive:about
 * @description
 * # about
 */
angular.module('bahnhofApp').directive('about', function () {

	var link = function($scope){
		console.log('About');
	};

	return {
		templateUrl: 'views/_about.html',
		restrict: 'A',
		link: link,
		replace: true
	};
});
