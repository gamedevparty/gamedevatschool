angular.module('ngBoilerplate.session2', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
]).config([
  '$stateProvider',
  function config($stateProvider) {
    $stateProvider.state('session2', {
      url: '/session2',
      views: {
        'main': {
          controller: 'Session2Ctrl as ctrl',
          templateUrl: 'session2/main.tpl.html'
        }
      },
      data: { pageTitle: 'S\xe9ance 2' }
    });
  }
]).controller('Session2Ctrl', [
  '$scope',
  function Session2Ctrl($scope) {
    var ctrl = {};
    return ctrl;
  }
]);