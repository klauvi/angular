(function () {
'use strict';

angular.module('Ass1App', [])
.controller('Ass1Controller', Ass1Controller);

Ass1Controller.$inject = ['$scope'];
function Ass1Controller($scope) {

  $scope.countFood = function () {
    var text = $scope.lunchInput.trim().split(',');
    if(text.length <= 0) {
    	$scope.message = "Please enter data first";
    }
    else if(text.length < 4) {
    	$scope.message = "Enjoy!";
    }
    else {
    	$scope.message = "Too much!";
    }
  };
}

})();
