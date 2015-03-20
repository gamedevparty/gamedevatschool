angular.module( 'ngBoilerplate.session5', [
  'ui.router',
  'ui.bootstrap'
])

.config(function( $stateProvider ) {
  $stateProvider.state( 'session5', {
    url: '/session5',
    views: {
      "main": {
        templateUrl: 'session5/main.tpl.html'
      }
    },
    data:{ pageTitle: 'Séance 5' }
  });
});
