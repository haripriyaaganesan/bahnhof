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
    lastOffset: 0,
    height: 0,

    windowHeight: 0,

    mediaHeight: 0,
    textHeight: 0,
    smallerCol: 0,
    largerCol: 0,
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


      self.lastOffset = element.offset().top;


    },



    // -------------------------------------------------
    //
    // Reset functions
    // 
    // -------------------------------------------------
    reset: function(element){
      var self = this;



      self.windowHeight = $(window).height();

      
      // -------------------------------------------------
      //
      // Make sure offsetTop is relative to document, since we have overflow scrolling on
      // 
      // -------------------------------------------------
      
      self.scrollTop = scrollFrame.scrollTop();
      self.offsetTop = element.offset().top + self.scrollTop;
      
      







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
      self.largerCol = self.mediaHeight > self.textHeight ? self.mediaHeight : self.textHeight;


      // ------------------------------------------------
      // Calc and make columns same length
      //

      if (self.mediaHeight > self.textHeight){
        self.heightDifference = self.mediaHeight - self.textHeight;

        self.text.css({
          height: self.mediaHeight
        });

        // ------------------------------------------------
        // Set overall height of parent element
        //
        self.height = self.mediaHeight;

        
        element.css({
          height: self.mediaHeight
        });
      }

      else{
        self.heightDifference = self.textHeight - self.mediaHeight;
        
        self.media.css({
          height: self.textHeight
        });

        self.height = self.textHeight;

        element.css({
          height: self.textHeight
        });
      }

      self.onScroll();

    },










    // -------------------------------------------------
    //
    // Scroll functions
    // 
    // -------------------------------------------------
    
    onScroll: function(element){
      var self = this;

      var percent, progress, space, total;



      self.scrollTop = scrollFrame.scrollTop();


      // ------------------------------------------------
      // Current Amount of Pixels scrolled from START of section
      //
      
      progress = Math.floor((self.offsetTop - self.scrollTop) * -1);






      total = self.smallerCol > self.windowHeight ? self.height - self.windowHeight : self.height - self.smallerCol;
      

      percent = progress / self.largerCol;

      if (percent < 0 && self.smallerCol < self.windowHeight){
        percent = 0;
      }

      if (percent > 1 && self.smallerCol < self.windowHeight){
        percent = 1;
      }

      space = self.heightDifference * percent;


      // -------------------------------------------------
      //
      // Haven't hit mark yet. Make sure everything is zero'ed out.
      // 
      // -------------------------------------------------
      
      if (self.scrollTop < self.offsetTop){
        
        self.text.transition({
            y: 0
          },0);

        self.media.transition({
            y: 0
          },0);

      }

      // -------------------------------------------------
      //
      // In the zone
      // 
      // -------------------------------------------------
      
    
      
      else{

        if (self.mediaHeight > self.textHeight){

          self.text.transition({
            y: space,
            height: self.mediaHeight - space
          },0);


        }

        else{
          self.media.transition({
            y: space,
            height: self.textHeight - space
          },0);

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
