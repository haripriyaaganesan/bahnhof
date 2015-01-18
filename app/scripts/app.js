'use strict';

/**
 * @ngdoc overview
 * @name bahnhofApp
 * @description
 * # bahnhofApp
 *
 * Main module of the application.
 */
angular
  .module('bahnhofApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'duScroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/restaurant', {
        templateUrl: 'views/restaurant.html',
        controller: 'RestaurantCtrl'
      })
      .when('/kultur', {
        templateUrl: 'views/kultur.html',
        controller: 'KulturCtrl'
      })
      .when('/hotel', {
        templateUrl: 'views/hotel.html',
        controller: 'HotelCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
