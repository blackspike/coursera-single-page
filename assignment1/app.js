(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.resultMessage = "";
  $scope.lunchList = "";

  $scope.checkLunchList = function() {
    var splitArray = $scope.lunchList.split(",");
    if ($scope.lunchList == "" || splitArray.length == 0) {
      $scope.resultMessage = "Please enter data first";
    } else if (splitArray.length <= 3) {
      $scope.resultMessage = "Enjoy!";
    } else {
      $scope.resultMessage = "Too Much!";
    }
  };

}

})();
