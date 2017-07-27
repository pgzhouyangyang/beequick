app.controller("cartCtrl",["$scope","$http","dataService","uFac","$rootScope",function($scope,$http,dataService,uFac,$rootScope){
        $scope.groupList=dataService.getAllGoods();
        $scope.length=$scope.groupList.length;
        $scope.allPrice=uFac.money();
        $scope.checkBol=dataService.bol();
        // console.log(dataService.getAllGoods());
        $scope.add=function(){

            dataService.addItem(this.g);
            $scope.allPrice=uFac.money();
            $scope.length=$scope.groupList.length;
            dataService.setNum(uFac.allNum());
            // $rootScope.$broadcast("to-bro",uFac.allNum())
            dataService.ddd();
            $scope.checkBol=dataService.bol()

        }
        $scope.del=function(){
            dataService.delItem(this.g);
            $scope.allPrice=uFac.money();
            $scope.length=$scope.groupList.length
            dataService.setNum(uFac.allNum());
            // $rootScope.$broadcast("to-bro",uFac.allNum())
        }



        $scope.check=function(){
            dataService.check(this.g);
            $scope.allPrice=uFac.money();
            $scope.checkBol=dataService.bol()
            console.log(this.g);
        }
        $scope.allCheck=function(){
            dataService.allCheck();
            $scope.allPrice=uFac.money();
            $scope.checkBol=dataService.bol();
        }

        $scope.xiang=function(){
            dataService.setXiang(this.g)
        }

}])
