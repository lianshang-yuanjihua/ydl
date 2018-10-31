var goodsfreight = $('.by-goodsadress'); //运费金额
var goodsName = $('.by-Customer');//顾客名字
var goodsPhone  = $('.by-Customer-phone');//顾客手机号
var goodsAddress = $('.by-goods-address'); //获取用户地址
// var goodsT = $('.by-goodstotal');//总价

// var goodsS = $('.by-goodsshop');//商品金额
// var goodsTj = $('.by-totaltj');  // 提交金额
var goodsN = $('.by-goodsnumber');//数量
var goodsP = $('.by-goodsprice');//单价

(function () {
    mui.init({
        swipeBack: true //启用右滑关闭功能
    });
    var slider = mui("#slider");
    slider.slider({
        interval: 2000
    });

})();
//支付弹框
$('.by-total-btn').click(function () {
    openPay()
})
//点击弹出支付窗口
function openPay(){
    $('.by-pay-box').removeClass('mui-hidden');
    // console.log($('body').innerHeight());
    $('.by-pay-box').css('height',$('body').innerHeight()-44);
    $('.by-pay-back').css('height',$('.by-pay-box').height()-50);
    console.log($('.by-pay-back').height());
    closePay();
}
//点击关闭支付弹窗
function closePay(){
    $('.by-pay-back').click(function(){
        $('.by-pay-box').addClass('mui-hidden');
    })
}

//提交商品参数

function upload(){
    var shopping = []; //所有商品数量
    var obj = []; //每个种类的商品

    //获取商品种类id
    var goodsId = []; 
    $('.by-data-goodsid').each(function (i, v) {
        goodsId.push(v.dataset.goodsid);
    });
    // console.log(goodsId);

    // 获取商品单价
    var goodsPrice = [];
    goodsP.each(function(i,v){
        goodsPrice.push(v.innerText);
    })
    // console.log(goodsPrice);

    //获取商品数量
    var goodsNumber = [];
    goodsN.each(function(i,v){
        goodsNumber.push(v.innerText);
    })
    // console.log(goodsNumber);
    for(let  i = 0;i < goodsId.length;i++){
        obj[i] = {};
        obj[i].id = goodsId[i];
        obj[i].number = goodsNumber[i];
        obj[i].price = goodsPrice[i];
        shopping.push(obj[i]);
    }
    // console.log($('.by-goods-address').data().addressid);
    $.ajax({
        type: "GET",
        url: "",
        data:{
            "shop":shopping, // 所有商品信息
            "addressId":$('.by-goods-address').data()  //地址id
        },
        dataType: "json",
        success: function (data) {
            console.log(data);
        }
    });
}
upload();

//价格总和
function priceAll() {
    total = 0;
    for (var c = 0; c < $(".by-goodsprice").length; c++) {
        // console.log(Number($($('.by-goodsprice')[c]).text()));
        // console.log(Number($($('.by-goodsnumber')[c]).text()));
        total += Number($($('.by-goodsprice')[c]).text()) * Number($($('.by-goodsnumber')[c]).text())
    }
    $('.by-totaltj').text(total);
    $('.by-goodsshop').text(total);
    $('.by-goodstotal').text(total);
    console.log(total);
}
priceAll()