$(function(){
    //获取元素节点
var goodsN = $('.by-goodsnumber');//数量
var goodsA = $('.by-goodsadress'); //运费金额
var goodsP = $('.by-goodsprice');//价格


var goodsT = $('.by-goodstotal');//总价
var goodsS = $('.by-goodsshop');//商品金额
var goodsTj = $('.by-totaltj');  // 提交金额

goodsT.text(Number(goodsN.text())*Number(goodsP.text())+Number(goodsA.text())); //商品总价加运费

goodsS.text(Number(goodsN.text())*Number(goodsP.text())) //商品金额

goodsTj.text(Number(goodsN.text())*Number(goodsP.text())+Number(goodsA.text()));  //商品总价加运费

})


