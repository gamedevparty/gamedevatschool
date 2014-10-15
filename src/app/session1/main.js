angular.module( 'ngBoilerplate.session1', [
  'ui.router',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'session1', {
    url: '/session1',
    views: {
      "main": {
        controller: 'Session1Ctrl as ctrl',
        templateUrl: 'session1/main.tpl.html'
      }
    },
    data:{ pageTitle: 'Séance 1' }
  });
})

.controller( 'Session1Ctrl', function Session1Ctrl( $scope ) {
    this.games = [
        {
            url: "http://game.ioxapp.com/color/",
            type: "action",
            description: "trouver la couleur différente"
        },
        {
            url: "http://gabrielecirulli.github.io/2048/",
            type: "reflexion",
            description: "faire le plus gros chiffre en associant des tuiles"
        }
    ];
});
