/**
 * @author surejaj
 * 
 */
(function () {
  'use strict';

  angular.module('ReefTAS.pages', [
    'ui.router',
    'ReefTAS.pages.dashboard',
  ]).config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');

  }

})();
