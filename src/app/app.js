angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.session1',
  'ngBoilerplate.session2',
  'ngBoilerplate.session3',
  'ngBoilerplate.about',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' |  GameDev At School' ;
    }
  });

  $scope.sessions = [1, 2, 3];
  $scope.currentSession = 1;

  $scope.setCurrentSession = function (sessionId) {
      $scope.currentSession = sessionId;
  };
})
;
