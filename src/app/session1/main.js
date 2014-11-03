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
        },
        {
            url: "http://florentdeloison.fr/tetrisadventure/",
            type: "casse-brique",
            description: "Tetris"
        },
        {
            url: "http://gridland.doublespeakgames.com/",
            type: "",
            description: "Gridland"
        },
        {
            url: "http://orteil.dashnet.org/experiments/cookie/",
            type: "snake",
            description: "Cookie miner"
        },
        {
            url: "http://www.foddy.net/CLOP.html",
            type: "simulation course",
            description: "CLOP"
        },
        {
            url: "http://www.amanita-design.net/samorost-1/",
            type: "aventure - point 'n click",
            description: "Samorost2"
        },
        {
            url: "http://www.botanicula.net/",
            type: "aventure - point't click",
            description: "Bonitacula"
        },
        {
            url: "http://ponycorns.com/game.html",
            type: "aventure - point't click",
            description: "Ponycorns - jeu créé par une petite de 5 ans"
        },
        {
            url: "http://gamedevparty.fr/showcase-soviet-vs-asteroids/",
            type: "action - shoot them up",
            description: "Soviet vs Asteroids"
        },
        {
            url: "http://www.fastswf.com/fnriHoM",
            type: "action - fps",
            description: "Galactic Dump"
        },
        {
            url: "http://enchantjs.com/showcase/games-on-9leap-net/",
            type: "",
            description: "Démo jeux"
        },
        {
            url: "http://orteil.dashnet.org/experiments/cookie/",
            type: "",
            description: "Cookies"
        }
    ];


    // * plate-forme :
    // * http://armorgames.com/play/15745/pajama-boy-snow-adventure (un garçon qui Accès interdit
    // * Snake : http://cycleblob.com/ (HTML5) Ne marche pas sous firefox?
    // * Jeu de course :
    // * Coaster Racer http://www.kongregate.com/games/LongAnimals/coaster-racer?referrer=Kramkram Accès interdit
    // * Big Pixel Racing http://www.kongregate.com/games/BigPixel/big-pixel-racing?referrer=Kramkram Accès interdit
    // * Action http://ecrans.liberation.fr/ecrans/2014/07/07/strikeforce-kitty_1059112  Accès interdit
    // * Puzzle game :
    // * Starry night (Flash) http://www.ferryhalim.com/orisinal/g3/starry.htm Accès interdit
    // * Bombermine : http://bombermine.com/#/ La page s'affiche, puis quand je" lance le jeu, ça devient tout noir...
    // * Puzzle : World of Goo http://worldofgoo.com/dl2.php?lk=demo marche pas
    // * FR Blob story http://www.a10.com/puzzle-games/blobs-story Accès interdit
    // * Asteroid (jeux de tir)
    // * Emit http://www.newgrounds.com/portal/view/634742 Accès interdit
    // * Experimental Shooter http://armorgames.com/play/12154/experimental-shooter Accès interdit
    // * PIngouins vs Zombies http://www.coolbuddy.com/games/game.asp?gid=3950 Accès interdit
    // * Fatcat http://www.nitrome.com/games/fatcat/ Accès interdit
    // * Carrot race (Flash) http://www.ferryhalim.com/orisinal/g3/carrot.htm Accès interdit
    // * Sport  :
    // * Combat de rue : La Brute http://labrute.com/  Accès interdit
    // * Démos jeux en HTML5 http://enchantjs.com/showcase/games-on-9leap-net/Ok
    // * Cookies : http://orteil.dashnet.org/experiments/cookie/Ok
    // simulation course voiture
    // http://scratch.mit.edu/projects/30933144/?fromexplore=true
    // http://scratch.mit.edu/projects/26377462/?fromexplore=true
    // pong
    // http://scratch.mit.edu/projects/2718643/
    // http://scratch.mit.edu/projects/27109901/
    // casse brique
    // http://scratch.mit.edu/projects/862677/
    // RPG
    // http://scratch.mit.edu/projects/15151561/
    //point 'n click
    // scratch.mit.edu/projects/17012316/


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
