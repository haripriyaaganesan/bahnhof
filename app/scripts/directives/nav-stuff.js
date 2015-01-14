'use strict';

/**
 * @ngdoc directive
 * @name bahnhofApp.directive:navStuff
 * @description
 * # navStuff
 */
angular.module('bahnhofApp').directive('navStuff', function () {

	
	var link = function($scope, element){


		$scope.nav = {
			open: false,
			burger: $('.burger'),
			openNav: $('.open-nav'),

			toggle: function(){
				var self = this;

				if (self.open){
					self.burger.removeClass('open');
					self.openNav.removeClass('open-up');
					self.open = false;
				}
				else{
					self.burger.addClass('open');
					self.openNav.addClass('open-up');
					self.open = true;
				}
			},

			close: function(){
				var self = this;

				self.burger.removeClass('open');
				self.openNav.removeClass('open-up');
				self.open = false;
			}

		};


		$scope.$on('$locationChangeStart', function(event) {
			// if ($scope.form.$invalid) {
			// 	event.preventDefault();
			// }

			$scope.nav.close();
		});




	};

	return {
		restrict: 'EA',
		link: link
	};
});
