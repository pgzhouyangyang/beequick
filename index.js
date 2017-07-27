app.controller("indexCtrl",["$scope","$http","dataService","uFac","$rootScope","$cacheFactory",function($scope,$http,dataService,uFac,$rootScope,$cacheFactory){
    $scope.state=1;
    // var cache = $cacheFactory.get("$http");
    // var url="http://h5.yztctech.net/api/axf/apicategory.php?category=优选水果"
    // $http({
    //     method: 'GET',
    //     url: url,
    //     cache: true
    //     }).success(function (data, status, headers,
    //     config) {
    //         console.log(data);
    //         $scope.result = data;
    //         var arrResp = cache.get(url);
    //
    //         $scope.cache =JSON.parse(arrResp[1]);
    //         console.log($scope.cache);
    //     })
    var a=[];
    $http.get("http://h5.yztctech.net/api/axf/apicategory.php?category=优选水果").then(function(data){
        a[0]=data.data

    });
    $http.get("http://h5.yztctech.net/api/axf/apicategory.php?category=牛奶面包").then(function(data){
        // console.log(data);
        a[1]=data.data
    });
    $http.get("http://h5.yztctech.net/api/axf/apicategory.php?category=天天特价").then(function(data){
        // console.log(data);
        a[2]=data.data
    });
    $http.get("http://h5.yztctech.net/api/axf/apicategory.php?category=热销榜").then(function(data){
        a[3]=data.data;
    });
    dataService.setData(a);


    // $rootScope.$on("to-bro",function(event,data){
    //     $scope.num=data;
    // });
    $scope.num=dataService.getNum();


}])
