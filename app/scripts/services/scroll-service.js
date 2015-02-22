'use strict';

/**
 * @ngdoc service
 * @name bahnhofApp.scrollService
 * @description
 * # scrollService
 * Factory in the bahnhofApp.
 */
angular.module('bahnhofApp').factory('scrollService', function ($timeout) {

  
  var scrollFrame = $('.view-wrapper');


  var Piece = function(element){
    var self = this;

    self.init(element);
  };




  Piece.prototype = {


    offsetTop: 0,
    height: 0,


    mediaSpacer: [],
    textSpacer: [],
    
    windowHeight: 0,
    windowWidth: 0,

    mediaHeight: 0,
    textHeight: 0,
    smallerCol: 0,
    heightDifference: 0,

    media: {},
    text: {},

    init: function(element){

      var self = this;

      // -------------------------------------------------
      //
      // Configs
      // 
      // -------------------------------------------------


      self.element = element;
      
      self.media = self.element.find('.media');
      self.text = self.element.find('.text');
      self.mediaSpacer = self.element.find('.media-spacer');
      self.textSpacer = self.element.find('.text-spacer');

      self.offsetTop = 0;

      // ------------------------------------------------
      // Add binds
      //

      $(window).on('resize', function(){
        self.reset(element);
      });

      scrollFrame.bind('scroll', function(ev){
        self.onScroll();
      });


      

      // ------------------------------------------------
      // Inital reset
      //
      
      $timeout(function(){
        self.reset(element);
      },200);
    },



    // -------------------------------------------------
    //
    // Reset
    // 
    // -------------------------------------------------
    reset: function(element){
      var self = this;


      console.log('resized');


      self.windowHeight = $(window).height();
      self.windowWidth = $(window).width();

      self.offsetTop = element.offset().top;
      self.height = element.outerHeight(true);


      // ------------------------------------------------
      // Reset to 0
      //
      
      self.mediaSpacer.css({
        height: 0
      });

      self.textSpacer.css({
        height: 0
      });


      // ------------------------------------------------
      // Get column heights
      //

      self.mediaHeight = self.media.css({
        height: 'auto'
      }).outerHeight(true);

      self.textHeight = self.text.css({
        height: 'auto'
      }).outerHeight(true);

      // ------------------------------------------------
      // Find out which is bigger
      //
      
      self.smallerCol = self.mediaHeight > self.textHeight ? self.textHeight : self.mediaHeight;

      console.log(self.smallerCol);

      // ------------------------------------------------
      // Calc and make columns same length
      //

      if (self.mediaHeight > self.textHeight){
        self.heightDifference = self.mediaHeight - self.textHeight;

        self.text.css({
          height: self.mediaHeight
        });
      }

      else{
        self.heightDifference = self.textHeight - self.mediaHeight;
        self.media.css({
          height: self.textHeight
        });
      }
    },


    onScroll: function(){
      var self = this;

      var percent, progress, space, total;

      self.scrollTop = scrollFrame.scrollTop();

      progress = (self.offsetTop - self.scrollTop) * -1;
      total = self.smallerCol > self.windowHeight ? self.height - self.windowHeight : self.height - self.smallerCol;

      console.log(self.windowHeight);

    }

  };




    // -------------------------------------------------
    //
    // Scroll methods
    // 
    // -------------------------------------------------
    
  //   this.onScroll =  function(){
  //     var percent, progress, space, total;

  //     this.scrollTop = frame.scrollTop();

  //     progress = (this.offsetTop - this.scrollTop) * -1;
  //     total = this.smallerCol > this.windowHeight ? this.height - this.windowHeight : this.height - this.smallerCol;

  //     percent = progress / total;


  //     if (percent < 0 && this.smallerCol < this.windowHeight){
  //       percent = 0;
  //     }

  //     if (percent > 1 && this.smallerCol < this.windowHeight){
  //       percent = 1;
  //     }

  //     space = this.heightDifference * percent;

      


  //     if (this.scrollTop < this.offsetTop){
  //       mediaSpacer.css({
  //         height: 0
  //       });

  //       return textSpacer.css({
  //         height: 0
  //       });
  //     }


  //     else if (this.smallerCol > this.windowHeight && this.scrollTop >= this.offsetTop && (this.scrollTop + this.windowHeight) >= (this.offsetTop + this.height)) {

        
  //       // ------------------------------------------------
  //       // Image column is bigger, add space to text
  //       //
        
  //       if (this.mediaHeight > this.textHeight){
  //         mediaSpacer.css({
  //           height: 0
  //         });

  //         return textSpacer.css({
  //           height: this.heightDifference
  //         });

  //       }

  //       // ------------------------------------------------
  //       // Text col is bigger, add space to media
  //       //
        
  //       else{
  //         mediaSpacer.css({
  //           height: this.heightDifference
  //         });

  //         return textSpacer.css({
  //           height: 0
  //         });
  //       }
  //     }


  //     // -------------------------------------------------
  //     //
  //     // Completed
  //     // 
  //     // -------------------------------------------------
      
  //     else{
  //       if (this.mediaHeight > this.textHeight){
  //         mediaSpacer.css({
  //           height: 0
  //         });

  //         return textSpacer.css({
  //           height: space
  //         });
  //       }

  //       else{
  //         mediaSpacer.css({
  //           height: space
  //         });

  //         return textSpacer.css({
  //           height: 0
  //         });
  //       }
  //     }
  //   };

    

  //   return this.init();
    

  // };

  

  // Public API here
  return {
    init: function(element){
      return new Piece(element);
    }
  };
});
