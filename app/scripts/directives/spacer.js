'use strict';

/**
 * @ngdoc directive
 * @name bahnhofApp.directive:spacer
 * @description
 * # spacer
 */
angular.module('bahnhofApp').directive('spacer', ['scrollService', function (scrollService) {

	var link = function($scope, element){


		var section = scrollService.init(element);

		console.log(element.offset().top);

		// var chapter = {

		// 	parent: angular.element(element),
		// 	shortCol: $('#hotel-text'),
		// 	longCol: $('#hotel-images'),
		// 	spacer: parent.find('.spacer'),
		// 	frame: $('.view-wrapper'),
		// 	scrollTop: 0,
		// 	windowHeight: $(window).height(),
		// 	windowWidth: $(window).width(),
		// 	height: 0,

		// 	init: function(){
		// 		var self = this;


		// 		self.frame.on('scroll', function(){
		// 			self.onWindowScroll();
		// 		});

		// 		self.frame.on('resize', function(){
		// 			self.onWindowResize();
		// 		});


		// 		return self.onWindowResize();
		// 	},




		// 	onWindowScroll: function(){
		// 		var self = this;

		// 		var percent, progress, push, total;

		// 		self.scrollTop = self.frame.scrollTop();
		// 		progress = (self.shortCol.offset().top - self.scrollTop) * -1;

		// 		console.log(self.scrollTop, progress);
		// 	},





		// 	onWindowResize: function(){
		// 		var self = this;
		// 		console.log('resized');
			

		// 		self.windowHeight = $(window).height();
		// 		self.windowWidth = $(window).width();
		// 		self.offsetTop = self.longCol.offset().top;
		// 		self.height = self.longCol.outerHeight(true);

		// 		self.spacer.css({
		// 			height: 0;
		// 		});

		// 		console.log(self.offsetTop);
		// 	}

		// };

		// chapter.init();
	};
	


	return {
		restrict: 'A',
		link: link
	};
}]);


// Chapter = function($el, i) {


//     this.onWindowScroll = function() {
//       var percent, progress, push, total;
//       this.scrollTop = $(window).scrollTop();
//       progress = (this.offsetTop - this.scrollTop) * -1;
//       total = this.smallHeight > this.windowHeight ? this.height - this.windowHeight : this.height - this.smallHeight;
//       percent = progress / total;
//       if (percent < 0 && this.smallHeight < this.windowHeight) {
//         percent = 0;
//       }
//       if (percent > 1 && this.smallHeight < this.windowHeight) {
//         percent = 1;
//       }
//       push = this.heightDifference * percent;
//       if (this.scrollTop < this.offsetTop) {
//         this.$mediaPusher.css({
//           height: 0
//         });
//         return this.$textPusher.css({
//           height: 0
//         });
//       } else if (this.smallHeight > this.windowHeight && this.scrollTop >= this.offsetTop && (this.scrollTop + this.windowHeight) >= (this.offsetTop + this.height)) {
//         if (this.mediaHeight > this.textHeight) {
//           this.$mediaPusher.css({
//             height: 0
//           });
//           return this.$textPusher.css({
//             height: this.heightDifference
//           });
//         } else {
//           this.$mediaPusher.css({
//             height: this.heightDifference
//           });
//           return this.$textPusher.css({
//             height: 0
//           });
//         }
//       } else {
//         if (this.mediaHeight > this.textHeight) {
//           this.$mediaPusher.css({
//             height: 0
//           });
//           return this.$textPusher.css({
//             height: push
//           });
//         } else {
//           this.$mediaPusher.css({
//             height: push
//           });
//           return this.$textPusher.css({
//             height: 0
//           });
//         }
//       }
//     };
//     this.onWindowResize = function() {
//       this.mediaHeight = this.$media.css({
//         height: 'auto'
//       }).outerHeight(true);
//       this.textHeight = this.$text.css({
//         height: 'auto'
//       }).outerHeight(true);
//       this.smallHeight = this.mediaHeight > this.textHeight ? this.textHeight : this.mediaHeight;
//       if (this.mediaHeight > this.textHeight) {
//         this.heightDifference = this.mediaHeight - this.textHeight;
//         this.$text.css({
//           height: this.mediaHeight
//         });
//       } else {
//         this.heightDifference = this.textHeight - this.mediaHeight;
//         this.$media.css({
//           height: this.textHeight
//         });
//       }
//       return this.onWindowScroll();
//     };
//     return this.init();
//   };

//   $(document).ready(function() {
//     if (typeof console !== 'undefined') {
//       console.log("%cC21, 2014\nDesign: Johanna Lundberg (http://johannalundberg.com)\nDevelopment: Nate van der Ende (http://nate.van-der-en.de)", "color: #000000; font-size: 14px; font-weight: bold;");
//     }
//     $('.chapter').each(function(i) {
//       var $el, chapter;
//       $el = $(this);
//       return chapter = new Chapter($el, i);
//     });
//     return $('a').on('click', function() {
//       var $a, href;
//       $a = $(this);
//       href = $a.attr('href');
//       if (href.substring(0, 1) === '#') {
//         $('body, html').animate({
//           scrollTop: $(href).offset().top
//         }, 1000);
//         return false;
//       }
//     });
//   });

// }).call(this);
