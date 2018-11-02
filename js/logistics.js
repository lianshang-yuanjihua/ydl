//商品价格合计
function total(){
    $('.by_goodsNumber').each(function(i,val){
    //    $('.by_goods_total')[i].innerText = Number($('.by_goodsNumber')[i].innerText)*Number($('.by_goodsprice')[i].innerText);
       $('.by_goods_total')[i].innerText = Number(val.innerText)*Number($('.by_goodsprice')[i].innerText);
    })
}
total();

//没有商品时
function noGoods(){
    if($(".by_goodsNumber").length==0){
        $('.by-content').addClass("mui-hidden");
        $('.by-noGoods').removeClass("mui-hidden");
    }
}
noGoods();

//商品信息确认按钮
function btnSucces(){
    $('body').on('click','.by_btn_goodsSucces',function(){
       //传递删除商品的订单号
        var _this = this;
        $.ajax({
            type:'GET',
            url:'',
            data:{
                "goodsId":$(_this).data(),
            },
            dataType:'json',
            success:function(){
                $(_this).parents('.by_card_box').remove();
            }
        })
        noGoods()
    })
}
btnSucces();