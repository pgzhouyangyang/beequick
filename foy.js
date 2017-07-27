app.factory("uFac",function(dataService){
    // console.log(dataService.getAllGoods());
    return {
        money:function(){
            var money=0;
            dataService.getAllGoods().map(function(item){
                if (item.bol) {
                    money+=(item.count*item.price);
                }
            });
            return money;
        },
        allNum:function(){
            var num=0;
            dataService.getAllGoods().map(function(item){
                num+=item.count;
            })
            return num;
        }
    }
})
