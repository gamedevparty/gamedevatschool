angular.module( 'ngBoilerplate.session4', [
  'ui.router',
  'ui.bootstrap'
])

.config(function( $stateProvider ) {
  $stateProvider.state( 'session4', {
    url: '/session4',
    views: {
      "main": {
        templateUrl: 'session4/main.tpl.html'
      }
    },
    data:{ pageTitle: 'Séance 4' }
  });
});
