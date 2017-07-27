app.directive("swiper",function(){
    return {
        restrict:"E",
        replace:true,
        template:`<div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" ng-repeat="src in msg">
                            <img ng-src="{{src.activity.img}}"/>
                        </div>
                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>
                </div>`
    }
});
app.directive("product",function(){
    return {
        restrict:"E",
        replace:true,
        template:`<div class="classify" ng-repeat="(index,item) in arr">
            <div class="classify-header">
                <span class="classify-header-title" ng-style="{'border-color':'{{item.color}}',color:'{{item.color}}'}">{{item.name}}</span>
                <span class="classify-header-more">更多&nbsp;&nbsp;></span>
            </div>
            <div class="classify-banner"><img ng-src="{{item.src}}"/></div>
            <ul class="goodsList">
                <li class="goodsList-item" ng-repeat="ss in arrData[index].data">
                    <div class="item-imag"><div ng-style="{'background-image':'url({{ss.img}})' }" ui-sref="xiangqing" ng-click="cv()"></div></div>
                    <div class="item-wrap">
                        <div class="product-name">{{ss.name}}</div>
                        <div class="product-promotion"><span>精选</span><span ng-if=ss.pm_desc>{{ss.pm_desc}}</span></div>
                        <div class="product-specifics">{{ss.specifics}}</div>
                        <div class="product-price-wrap">
                            <span class="price-yuan">￥<span>{{ss.price}}</span></span>
                            <span ng-if=ss.market_price class="product-price-market" ng-style="{color:'#999','text-decoration':'line-through'}">￥<span>{{ss.market_price}}</span></span>
                        </div>
                        <div class="product-operates-item"><span ng-click="add()" class="pro-add"></span></div>
                    </div>
                </li>
            </ul>
        </div>`
    }
})
app.controller("homeCtrl",["$scope","$http","dataService","uFac",function($scope,$http,dataService,uFac){
    $scope.cv=function(){
        dataService.setXiang(this.ss);

    }
    $http.get("http://h5.yztctech.net/api/axf/apihome.php").then(function(data){
        // console.log(data.data);
        $scope.msg=data.data.data.slide;
        var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        autoplay:2000,
        autoplayDisableOnInteraction:false,
        observer:true
        })
        $scope.menu=data.data.data.menu;
    },function(error){
        console.log(error);
    });

    $scope.arrData=dataService.getData();
    // console.log($scope.arrData);
    $scope.arr=[
        {name:"优选水果",color:"#F38631",src:"http://img01.bqstatic.com//upload/activity/201611221806316.jpg@90Q.jpg"},
        {name:"牛奶面包",color:"#20B1FA",src:"http://img01.bqstatic.com//upload/activity/2016093011213251.jpg@90Q.jpg"},
        {name:"悠闲零食",color:"#E80013",src:"http://img01.bqstatic.com//upload/activity/2016120115182553.jpg@90Q.jpg"},
        {name:"方便熟食",color:"#1EB2A3",src:"http://img01.bqstatic.com//upload/activity/201611291718265.jpg@90Q.jpg"},
    ];
    $scope.add=function(){
        dataService.addItem(this.ss);
        dataService.setNum(uFac.allNum());
        // console.log(dataService.getAllGoods());
    }

    $scope.isActive=function(index){
        dataService.setInd(index)
    }
}]);
