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


      scrollFrame.on('scroll', function(){
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


      // ------------------------------------------------
      // Current Amount of Pixels scrolled from START of section
      //
      
      progress = Math.floor((self.offsetTop - self.scrollTop) * -1);



      //****POTENTIAL PROBLEM ***//

      total = self.smallerCol > self.windowHeight ? self.height - self.windowHeight : self.height - self.smallerCol;
      





      //temporarily make media height always larger

      percent = progress / self.mediaHeight;

      if (percent < 0 && self.smallerCol < self.windowHeight){
        percent = 0;
      }

      if (percent > 1 && self.smallerCol < self.windowHeight){
        percent = 1;
      }

      space = self.heightDifference * percent;


      // ------------------------------------------------
      // If we haven't yet scrolled to the target section
      //
      
      if (self.scrollTop < self.offsetTop){
        self.mediaSpacer.css({
          height: 0
        });

        return self.textSpacer.css({
          height: 0
        });
      }


      else if (self.smallerCol > self.windowHeight && self.scrollTop >= self.offsetTop && (self.scrollTop + self.windowHeight) >= (self.offsetTop + self.height)){
        

      //   // ------------------------------------------------
      //   // Image column is bigger, add space ot text
      //   //
        

        if (self.mediaHeight > self.textHeight){
          self.mediaSpacer.css({
            height: 0
          });

          return self.textSpacer.css({
            height: space
          });
        }

        else{
          self.mediaSpacer.css({
            height: self.heightDifference
          });

          return self.textSpacer.css({
            height: 0
          });
        }

      }



      // -------------------------------------------------
      //
      // Completed scroll. Make heights permanent
      // 
      // -------------------------------------------------
      
      else{


        if (self.mediaHeight > self.textHeight){
          self.mediaSpacer.css({
            height: 0
          });

          self.text.transition({
            y: space,
            height: self.mediaHeight - space
          },0);

          console.log(self.mediaHeight - space);

          // return self.textSpacer.css({
          //   height: space
          // });
        }

        else{
          self.mediaSpacer.css({
            height: space
          });

          return self.textSpacer.css({
            height: 0
          });
        }

      }

    }

  };



  // Public API here
  return {
    init: function(element){
      return new Piece(element);
    }
  };
});
