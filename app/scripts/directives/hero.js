'use strict';

/**
 * @ngdoc directive
 * @name bahnhofApp.directive:hero
 * @description
 * # hero
 */
angular.module('bahnhofApp').directive('hero', function () {
	

	var link = function($scope){
		console.log('hero');
	};

	
	return {
		templateUrl: 'views/_hero.html',
		restrict: 'A',
		replace: true,
		link: link
	};
});
