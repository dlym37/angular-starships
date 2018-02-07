angular.module('starships').controller('shipCtrl', function($scope, shipSrvc, $stateParams){
    $scope.id = $stateParams.id;

    shipSrvc.getShip($stateParams.id).then(ship => {
        $scope.ship = ship
    })

})