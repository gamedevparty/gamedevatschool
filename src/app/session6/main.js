angular.module( 'ngBoilerplate.session6', [
  'ui.router',
  'ui.bootstrap'
])

.config(function( $stateProvider ) {
  $stateProvider.state( 'session6', {
    url: '/session6',
    views: {
      "main": {
        templateUrl: 'session6/main.tpl.html'
      }
    },
    data:{ pageTitle: 'Séance 6' }
  });
});
