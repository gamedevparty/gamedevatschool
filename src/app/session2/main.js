angular.module( 'ngBoilerplate.session2', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'session2', {
    url: '/session2',
    views: {
      "main": {
        controller: 'Session2Ctrl as ctrl',
        templateUrl: 'session2/main.tpl.html'
      }
    },
    data:{ pageTitle: 'Séance 2' }
  });
})

.controller( 'Session2Ctrl', function Session2Ctrl( $scope ) {
  var ctrl = {};
  return ctrl;
});
