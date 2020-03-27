'use strict';
     angular

 .module('ng8passweb',[auth0,angular-jwt,angular-storage])    
 .config(function($provide,authProvider,$stateProvider,$urlRouterProvider,$htppProvider,jwtInterceptorProvider){

$urlRouterProvider.otherwise('/home');

$stateProvider 
  .state('home',{
   url: '/home',
   templateUrl:'components/home/home.tpl.html'

  })
   .state('profile',{
       url: '/profile',
       templateUrl:'components/profile/profile.tpl.html',
       controller:'profileController as user'
   });

 })