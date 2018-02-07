angular.module('starships').service('shipSrvc', function($http){ //$http is similar to axios.

  this.ships = ['x-wing', 't-fighter', 'death star', 'millenium falcon'];

  this.getShips = function(){
    return $http.get('https://swapi.co/api/starships/').then(resp => {
      return resp.data.results.map(ship => {
        let ary = ship.url.split('/');
        ship.id = ary[ary.length-2];
        return ship;
      })
    })
  }
  this.getShip = function(id){
    return $http.get('https://swapi.co/api/starships/'+id) 
    .then(resp => resp.data);
  }
})