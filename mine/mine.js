app.controller("mineCtrl",["$scope","$interval",function($scope,$interval){
    $scope.dis=60;
    $scope.getCode=function(){
        console.log($scope.phone);
        if ($scope.phone==undefined) {
            alert("请输入正确的手机号");
            return;
        }
        $scope.dis--;
        var no=$interval(function(){
            $scope.dis--;
            if ($scope.dis<=0) {
                $scope.dis=60;
                 $interval.cancel(no)
            }
        },1000)
    };
}])
