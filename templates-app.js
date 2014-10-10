angular.module('templates-app', ['about/about.tpl.html', 'home/home.tpl.html', 'session1/main.tpl.html', 'session2/main.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    GameDevParty <small>kid edition</small>\n" +
    "  </h1>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "  <h1>GameDev at school</h1>\n" +
    "\n" +
    "  <p class=\"lead\">\n" +
    "    Projet de création d'un jeu vidéo par des élèves de CM2.\n" +
    "  </p>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("session1/main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("session1/main.tpl.html",
    "<div data-ng-init=\"presentation=false;games=false;groups=false;pitch=false;tools=false;\">\n" +
    "    <div class=\"row\">\n" +
    "        <h1 class=\"page-header\">Séance 1</h1>\n" +
    "        <h2>Déroulement</h2>\n" +
    "        <ul>\n" +
    "            <li><a href data-ng-click=\"presentation = !presentation\">Présentation</a></li>\n" +
    "            <li><a href data-ng-click=\"games = !games\">Découverte de jeux indépendants</a></li>\n" +
    "            <li><a href data-ng-click=\"groups = !groups\">Les métiers</a></li>\n" +
    "            <li><a href data-ng-click=\"pitch = !pitch\">Définir le pitch du jeu</a></li>\n" +
    "            <li><a href data-ng-click=\"tools = !tools\">Découvrir les outils</a></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div id=\"presentation\" class=\"row\" data-ng-if=\"presentation\">\n" +
    "        <p>\n" +
    "            Préparer au B2I : brevet informatique & internet\n" +
    "            Faire découvrir des métiers : artwork, Game designer, développeur engine ui ia, sound designer, infographiste, gestion de projet, marketing\n" +
    "            Mettre l'accent sur la créativité\n" +
    "            Réaliser qqch même avec peu de moyens : démontrer que la créativité n'est pas soumise à l'argent\n" +
    "            Donner envie d'étudier d'autres matières : le français, les maths, l'anglais, la musique, l'histoire ...\n" +
    "            Le jeu réalisé serait open source / libre / licence creative commons (http://creativecommons.fr/licences/les-6-licences/) à discuter avec l'enseignant\n" +
    "            Le projet (càd, l'organisation même) est, sur le même principe que les logiciels libre ouvert, modifiable, réutilisable\n" +
    "            on veut pouvoir re-proposer l'expérience ou que d'autres écoles se l'approprient\n" +
    "        </p>\n" +
    "    </div>\n" +
    "    <div id=\"games\" class=\"row\" data-ng-if=\"games\">\n" +
    "        <h2>Jeux à tester</h2>\n" +
    "        <p>Qu'est-ce qu'un jeu \"indie\" (indépendant) ? En voici quelqu'uns</p>\n" +
    "        <table class=\"table table-hover\">\n" +
    "            <tr>\n" +
    "                <th>URL</th><th>type</th><th>objectif</th>\n" +
    "            </tr>\n" +
    "            <tr data-ng-repeat=\"game in ctrl.games\">\n" +
    "                <td><a href=\"{{ game.url }}\">{{ game.url }}</a></td>\n" +
    "                <td>{{ game.type }}</td>\n" +
    "                <td>{{ game.description }}</td>\n" +
    "            </tr>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("session2/main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("session2/main.tpl.html",
    "<div data-ng-init=\"presentation=false;games=false;groups=false;pitch=false;tools=false;\">\n" +
    "    <div class=\"row\">\n" +
    "        <h1 class=\"page-header\">Séance 2</h1>\n" +
    "        <h2>Déroulement</h2>\n" +
    "        <ul>\n" +
    "            <li><a href=\"#presentation\" data-ng-click=\"presentation = !presentation\">Présentation</a></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
