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
    'ui.router',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'duScroll'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    console.log("%c2015\nBahnhof Thalfang", "color: #000000; font-size: 14px; font-weight: bold;");
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('restaurant', {
      url: '/restaurant',
      templateUrl: 'views/restaurant.html',
      controller: 'RestaurantCtrl'
    })
    .state('hotel', {
      url: '/hotel',
      templateUrl: 'views/hotel.html',
      controller: 'HotelCtrl'
    })
    .state('kultur', {
      url: '/kultur',
      templateUrl: 'views/kultur.html',
      controller: 'KulturCtrl'
    });
  });
