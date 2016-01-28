angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/page3',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('rock', {
      url: '/page4',
      templateUrl: 'templates/rock.html',
      controller: 'rockCtrl'
    })
        
      
    .state('pop', {
      url: '/page5',
      templateUrl: 'templates/pop.html',
      controller: 'rockCtrl'
    })
      
        
    .state('categorias', {
      url: '/',
      templateUrl: 'templates/categorias.html',
      controller: 'categoriasCtrl'
    })
        
      
    
      
        
    .state('signup', {
      url: '/page7',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page3');

});