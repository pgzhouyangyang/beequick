app.controller("xiangqing",["$scope","dataService","uFac",function($scope,dataService,uFac){
    $scope.q=dataService.getXiang();
    $scope.num=dataService.getNum();
    $scope.add=function(){
        dataService.addItem($scope.q);
        dataService.setNum(uFac.allNum());
    }
    $scope.del=function(){
        dataService.delItem($scope.q);
        dataService.setNum(uFac.allNum());
    }
}])
