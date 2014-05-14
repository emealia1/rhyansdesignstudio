angular
  .module('app', [
    'ui.router',
    'ngAnimate'
  ])
  .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        views: {
          "main": {
            templateUrl: 'templates/home.html'
          }
        }
      })
      .state('products', {
        views: {
          "main": {
            templateUrl: 'templates/products.html'
          }
        }
      })
      .state('lessons', {
        views: {
          "main": {
            templateUrl: 'templates/lessons.html'
          }
        }
      })
      .state('contact', {
        views: {
          "main": {
            templateUrl: 'templates/contact.html'
          }
        }
      });
    }]);