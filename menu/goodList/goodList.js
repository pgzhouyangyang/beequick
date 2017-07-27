app.controller("goodListCtrl",["$scope","$http","$rootScope","$stateParams","dataService","uFac",function($scope,$http,$rootScope,$stateParams,dataService,uFac){
    $scope.dataList=dataService.getData();
    // console.log($stateParams);
    $scope.id = $stateParams.id;
    $scope.add=function(){
        // console.log(this.$index);
        dataService.addItem(this.item);
        dataService.setNum(uFac.allNum());
    }
    $scope.del=function(){
        dataService.delItem(this.item);
        dataService.setNum(uFac.allNum());
    }

    $scope.cv=function(){
        dataService.setXiang(this.item);
    }
}]);

app.directive("hortPro",function(){
    return {
        restrict:"E",
        replace:true,
        template:`<ul class="hort-productList">
        <li ng-repeat="item in dataList[id].data">
            <div class="item-imag" ng-click="cv()" ui-sref="xiangqing"><div ng-style="{'background-image':'url({{item.img}})' }"></div></div>
            <div class="item-wrap">
                <div class="product-name">{{item.name}}</div>
                <div  class="product-promotion"><span>精选</span><span ng-if=item.pm_desc>{{item.pm_desc}}</span></div>
                <div class="product-specifics">{{item.specifics}}</div>
                <div class="product-price-wrap">
                    <span class="price-yuan">￥<span>{{item.price}}</span></span>
                    <span ng-if=item.market_price  class="product-price-market" ng-style="{color:'#999','text-decoration':'line-through'}">￥<span>{{item.market_price}}</span></span>
                </div>
                <div class="product-operates-item" >
                <span class="del" ng-click="del()" ng-if="item.count>=1"></span>
                <span class="num" ng-if="item.count>=1">{{item.count}}</span>
                <span ng-click="add()" class="add pro-add"></span>
                </div>
            </div>
        </li>

        </ul>`
    }
})
