'use strict';

/**
 * @ngdoc service
 * @name bahnhofApp.canvasService
 * @description
 * # canvasService
 * Factory in the bahnhofApp.
 */
'use strict';

/**
 * @ngdoc service
 * @name pritchardpediaApp.canvasService
 * @description
 * # canvasService
 * Factory in the pritchardpediaApp.
 */
angular.module('bahnhofApp').factory('canvasService', function ($window, $http) {

  var canvas = document.getElementById('canvas');
  var ctx;

  //container
  var fallingDrops = [];

  var width = $window.innerWidth;
  var height = $window.innerHeight;

  var drawBg = function(){
    ctx.clearRect(0,0,width, height);
  };

  var dir = 'images/icons/';



  

  var loadImages = function(){
    $http.get(dir).success(function(data){
      console.log(data);
    });
  };


  var canvasMethods = {

    fallingDrops: [],
    noOfDrops: 10,

    x: 0,
    y: 0,


    width: $window.innerWidth,
    height: $window.innerHeight,



    draw: function(){

      drawBg();
      

      for (var i = 0; i < fallingDrops.length; i++){
        ctx.drawImage (fallingDrops[i].image, fallingDrops[i].x, fallingDrops[i].y, fallingDrops[i].image.width, fallingDrops[i].image.height);
        fallingDrops[i].y += fallingDrops[i].speed; //Set the falling speed
        
        if (fallingDrops[i].y > height){  //Repeat the raindrop when it falls out of view
          fallingDrops[i].y = -55; //Account for the image size
          fallingDrops[i].x = Math.random() * width;    //Make it appear randomly along the width    
        }

      }

    },

    ranIcon: function(){

      var length = fallingIcons.length;
      var ranNum = Math.floor(Math.random() * length);
      return ranNum;

    },



    setup: function(){
      var self = this;

      self.width = $window.innerWidth;
      self.height = $window.innerHeight;
      canvas.width = self.width;
      canvas.height = self.height;

      if (canvas.getContext){
        

        ctx = canvas.getContext('2d');
        for (var i = 0; i < self.noOfDrops; i++){
          var fallingDr = {};

          fallingDr.image = new Image();
          fallingDr.image.src = 'images/icons/drop.png';
          fallingDr.image.height = 11;
          fallingDr.image.width = 5;

          fallingDr.x = Math.random() * canvas.width;
          fallingDr.y = Math.random() * 5;
          fallingDr.speed = 3 + Math.random() * 4;
          fallingDrops.push(fallingDr);
        }

        setInterval(self.draw, 25);
      }

    }


  };

  // Public API here
  return {
    setup: function () {
      canvasMethods.setup();
    },
    loadImages: function(){
      return loadImages();
    }
  };
});
