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
        },
        {
            url: "http://monorail-cat.esion99.info/",
            type: "action",
            description: "combat de chats sur monorail"
        }
    ];

    this.tools = [
        {
            name: "Scratch",
            url: "http://scratch.mit.edu/",
            urlDownload: "http://scratch.mit.edu/scratch2download/",
            description: "Éditeur de jeux vidéo et animations"
        },
        {
            name: "The Gimp",
            url: "http://www.gimp.org/",
            urlDownload: "http://download.gimp.org/pub/gimp/v2.8/windows/gimp-2.8.14-setup-1.exe",
            description: "Modification et création d'image"
        },
        {
            name: "Audacity",
            url: "http://audacity.sourceforge.net/",
            urlDownload: "http://audacity.sourceforge.net/",
            description: "Séquenceur pour la création de musiques"
        }
    ];
});
