# Game dev at school

Support pour les ateliers en classe.  

GameDevAtSchool est une initiative non commerciale de l'association [GameDevParty][2]

_Cette application est réalisée en angular avec [ngBoilerPlate][1]_

## Contribuer

cf. Pré-requis

1. Cloner le repo
2. [installer les dépendances][2]
3. Lancer le serveur local

~~~
git clone git@github.com:gamedevparty/gamedevatschool.git
bower install
grunt build watch
http-server build
~~~

## Déployer

~~~
git clone git@github.com:gamedevparty/gamedevatschool.git --branch gh-pages --single-branch gh-pages
grunt compile
(cd gh-pages && git commit --all && git push)
~~~

## Pré-requis

~~~
npm install -g bower grunt http-server
~~~

[1]: blob/master/README.ng-boiler-plate.md
[2]: http://gamedevparty.fr
