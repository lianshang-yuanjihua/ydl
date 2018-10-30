(function () {
    mui.init({
        swipeBack: true //启用右滑关闭功能
    });
    var slider = mui("#slider");
    slider.slider({
        interval: 2000
    });

})();
$(function () {
    $("#by-hj").text(priceAll());
})
$("body").on("change", ".mui-input-numbox", function () {

    priceAll();
})
//按钮减且赋值到价格
$("body").on("click", ".by-btn-reduce", function () {
    // console.log($(this).next().val());
    if ($(this).next('.by-input-num').val() <= 1) {
        $(this).attr('disabled', 'true');
        // $(this).parents('.mui-card').remove();
    };
})
//全选按钮
function checkAll() {
    $('#by-checkAll').change(function () {
        //      console.log($(this)[0].checked);
        if (!$(this)[0].checked) {
            $('.by-check').each(function (index, val) {
                val.checked = false;
            })
        } else {
            $('.by-check').each(function (index, val) {
                val.checked = true;
            })
        }
        priceAll();
    })
}
//计算价格总和
function priceAll() {
    total = 0;
    for (var c = 0; c < $(".signprice").length; c++) {
        if ($($('.by-check')[c]).is(':checked')) {
            total += Number($($('.signprice')[c]).text()) * Number($($('.by-input-num')[c]).val())
        }
        $('#by-hj').text(total);

    }
}
//单选按钮
function check() {
    $('body').on('change', '.by-check', function () {
        priceAll();
        var checkList = $('.by-check');
        var a = checkList.filter(function (i, v) {
            return v.checked == true; //checked为真的多选框
        });
        if (a.length == $('.by-check').length) {
            $('#by-checkAll')[0].checked = true;
        } else {
            $('#by-checkAll')[0].checked = false;
        };



    })
}

//商品不存在时
// function noGoods(){
//     // console.log($(".signprice").length);
//     if($(".signprice").length==0){
//         $('.by-content').addClass("mui-hidden");
//         $('.by-noGoods').removeClass("mui-hidden");
//     }
// }

checkAll();
check();

//结账提交数据
$('.by-jz-btn').click(function () {
    //获取商品种类
    var shopping = []; //所有商品数量
    var obj = []; //每个商品的种类

    //获取商品种类id
    var goodsId = []; 
    $('.by-card-data').each(function (i, v) {
        goodsId.push(v.dataset.id);
    });
    // console.log(goodsId);

    //获取商品单价
    var goodsPrice = [];
    $('.signprice').each(function(i,v){
        goodsPrice.push(v.innerText);
    })
    // console.log(goodsPrice);

    //获取商品数量
    var goodsNumber = [];
    $('.by-input-num').each(function(i,v){
        goodsNumber.push(v.value);
    })
    // console.log(goodsNumber);
    for(let  i = 0;i < goodsId.length;i++){
        obj[i] = {};
        obj[i].id = goodsId[i];
        obj[i].number = goodsNumber[i];
        obj[i].price = goodsPrice[i];
        shopping.push(obj[i]);
    }
    console.log(shopping);
    $.ajax({
        type: "GET",
        url: "",
        data:{
            "shop":shopping,
            "totalPrice":$('#by-hj').text(),
        },
        dataType: "json",
        success: function (data) {
            console.log(data);
        }
    });

})