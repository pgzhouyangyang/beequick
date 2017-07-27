app.service("dataService",function($timeout){
    var number=[3];
    $timeout(function(){
        number[0]=0;
    },2000)
    this.number=function(){
        return number;
    }
    // 全部数据
    var arrSer=[];
    this.setData=function(data){
        arrSer=data
    }
    this.getData=function(){
        return arrSer
    }

    // 详情
    var xiang={};
    this.setXiang=function(data){
        xiang=data;
    }
    this.getXiang=function(){
        return xiang
    }
    // 购物车
    var goodsArr=[];
    this.addItem=function(newItem){
        var flag=false;
        goodsArr.map(function(item){
            if (item.name==newItem.name) {
                flag=true;
                item.count++;
                newItem.bol=true;
            }
        })
        if(flag==false){
            newItem.count=1;
            newItem.bol=true;
            goodsArr.push(newItem);
        }
    }
    this.delItem=function(obj){
        var index=goodsArr.indexOf(obj);
        if (goodsArr[index].count==1) {
            goodsArr[index].count=0;
            goodsArr.splice(index,1);
        }else{
            goodsArr[index].count--;
        }
    }
    this.getAllGoods=function(){
        return goodsArr;
    }
    // 数量
    var pruNum=[];
    this.setNum=function(num){
        pruNum[0]=num;
    }
    this.getNum=function(){
        return pruNum;
    }

    //
    var i=[1];
    this.setInd=function(index){
        i[0]=index
    }
    this.getInd=function(){
        return i;
    }


    //多选按钮
    var checkBol=true;
    this.check=function(obj){
        var index=goodsArr.indexOf(obj);
        if (goodsArr[index].bol) {
            goodsArr[index].bol=false;
            checkBol=false;
        }else {
            goodsArr[index].bol=true;
            checkBol=true;
            goodsArr.map(function(item){
                if (!item.bol) {
                    checkBol=false;
                    return;
                }
            })

        }
    }

    this.ddd=function(){
        checkBol=true;
        goodsArr.map(function(item){
            if (!item.bol) {
                checkBol=false;
                return;
            }
        })
    }
    //全选按钮
    this.allCheck=function(){
        if (checkBol) {
            goodsArr.map(function(item){
                item.bol=false;
            });
            checkBol=false;
        }else {
            goodsArr.map(function(item){
                item.bol=true;
            });
            checkBol=true;
        }
    }
    this.bol=function(){
        return checkBol;
    }
})
