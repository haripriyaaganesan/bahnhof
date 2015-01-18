'use strict';

/* global Waypoint:false */
/**
 * @ngdoc directive
 * @name bahnhofApp.directive:unitName
 * @description
 * # unitName
 */
angular.module('bahnhofApp').directive('unitName', ['$rootScope', function ($rootScope) {

	var context = document.getElementById('home');

	var link = function($scope, element, attrs){
		

		var itemId = attrs.id;
		
		
		var item = document.getElementById(itemId);
		
		
		//call after timeout
		function init(){
			var waypoint = new Waypoint({
				element: item,
				offset: 80,
				context: context,
				handler: function(direction){
					var detail = attrs.detail;
					$rootScope.$broadcast('waypoint', detail);
					
				}
			});
		}

		init();
	}


	return {
		restrict: 'A',
		link: link
	};
}]);
