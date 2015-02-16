angular.module( 'ngBoilerplate.session3', [
  'ui.router',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'session3', {
    url: '/session3',
    views: {
      "main": {
        controller: Session3Ctrl,
        controllerAs: 'ctrl',
        templateUrl: 'session3/main.tpl.html'
      }
    },
    data:{ pageTitle: 'Séance 3' }
  });
});

function Session3Ctrl( $scope ) {
  var ctrl = {};

  return ctrl;
}
