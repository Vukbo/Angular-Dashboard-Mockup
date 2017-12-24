var app = angular.module('app',[]);
app.controller('controller',function($scope){
  $scope.fullName = function()
  {
    return $scope.fName + " " + $scope.lName;
  };
});
