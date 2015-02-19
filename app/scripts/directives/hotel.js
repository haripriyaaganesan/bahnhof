'use strict';

/**
 * @ngdoc directive
 * @name bahnhofApp.directive:hotel
 * @description
 * # hotel
 */
angular.module('bahnhofApp').directive('hotel', function () {

	
	var link = function($scope){
		console.log('Hotel');
	};


	return {
		templateUrl: 'views/_hotel.html',
		restrict: 'A',
		link: link
	};
});
