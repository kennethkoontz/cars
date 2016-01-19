angular
  .module('app', [])
  .controller('AppCtrl', function($scope, $http) {
    $http({
      method: 'get',
      url: '/cars'
    }).then(function(result) {
      $scope.cars = result.data;
    });

    $scope.submit = function() {
      $scope.cars.push($scope.newCar);
    };
    
    $scope.edit = function(car) {
      car.editting = true;
    };
    
    $scope.close = function(car) {
      car.editting = false;
    };
    
    $scope.delete = function(index) {
      $scope.cars.splice(index, 1);     
    }

    
  });
