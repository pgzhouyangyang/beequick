app.controller("menuCtrl",["$scope","uFac","dataService",function($scope,uFac,dataService){
    $scope.isActive=function(index){
        dataService.setInd(index);
    };

    $scope.i=dataService.getInd();
    // $scope.isActive=function(index){
    //     $scope.i=index
    // };
}])
