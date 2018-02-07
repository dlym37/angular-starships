angular.module('starships').controller('shipsCtrl', function($scope, shipSrvc){
  $scope.ships= shipSrvc.ships;
  
  shipSrvc.getShips().then(ships => {
    $scope.ships = ships;
  })
})