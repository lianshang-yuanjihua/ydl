//进入此页面判断是否有商品

    noGoods();
//元素查找
var goodsPrice = $('.by_goodsprice'); //单价
var goodsNumber = $('.by_goodsNumber');  //数量
var goodsTotal = $('.by_goodstotal');  //总价
var totalBtnOk = $('.by_total_btn_ok');  //付款
var totalBtnCancel = $('.by_total_btn_cancel');  //取消

goodsNumber.each(function(i,val){
    goodsTotal[i].innerText=(Number(val.innerText)*Number(goodsPrice[i].innerText));
})

//取消按钮
$('body').on('click','.by_total_btn_cancel',function(){
    console.log($(this));
    $(this).parents('.by_card_box').remove();
    noGoods();
})
//付款按钮
$('body').on('click','.by_total_btn_ok',function(){
    openPay();
})
//调用支付弹框
$('.by-total-btn').click(function () {
    openPay()
})
//点击弹出支付窗口
function openPay(){
    $('.by-pay-box').removeClass('mui-hidden');
    // console.log($('body').innerHeight());
    // $('.by-pay-box').css('height',$('body').innerHeight());
    $('.by-pay-back').css('height',$('.by-pay-box').height()-50);
}
//点击关闭支付弹窗
function closePay(){
    $('.by-pay-back').click(function(){
        $('.by-pay-box').addClass('mui-hidden');
    })
}
//没有商品时
function noGoods() {
    // console.log($(".signprice").length);
    if ($(".by_goodsNumber").length == 0) {
        $('.by-content').addClass("mui-hidden").next().addClass('mui-hidden');
        $('.by-noGoods').removeClass("mui-hidden");
    }
}
// $('.by_card_box').each(function(i,val){
//     console.log(val.dataset);
// })
//提交传递删除的商品信息成功删除该节点
function delGoods(){
    _this = this;
    $.ajax({
        type:'GET',
        url:'',
        data:{
            goodsId:$('.by_card_box').each(function(i,val){
                console.log(val.dataset);
            }),
        },
        dataType:'json',
        success:function(res){
            console.log(res);
            $(_this).parents('.by_card_box').remove();
            noGoods();
        }
    })
}
closePay();