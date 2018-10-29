//获取相对元素
var byPrice = $('#by-price');
var byBtnR = $('#by-btn-reduce');//
var byBtnA = $('#by-btn-add');
var byInputN = $('#by-input-num');
var byHj = $('#by-hj');
$(function(){
     byHj.text(byPrice.text() * byInputN.val())
})
//按钮减且赋值到价格
byBtnR.click(function () {
    if (byInputN.val() <= 1) {

        byBtnR.attr('disabled', 'disabled');
    }
})

byInputN.change(function(){
    byHj.text(byPrice.text() * byInputN.val());
})
//全选按钮
function checkAll(){
    $('#by-checkAll').change(function(){
        console.log($(this)[0].checked);
        if(!$(this)[0].checked){
            $('.by-check').each(function(index,val){
                val.checked=false;
            })
        }else{
            $('.by-check').each(function(index,val){
                val.checked=true;
            })
        }
    })
}
//单选按钮
function check(){
    $('body').on('change','.by-check',function(){
        var checkList = $('.by-check');
        var a = checkList.filter(function(i,v){
            
            return v.checked==true;//仅返回value=1的多选框
        });
        console.log($('.by-check').length);
        console.log(a.length);
        if(a.length == $('.by-check').length){
            console.log('by');
            $('#by-checkAll')[0].checked=true;
        }else{
            $('#by-checkAll')[0].checked=false;
            console.log('sp');
        }
    })
    
}
//合计按钮
$('.by-jz-btn').click(function(){
    var chexck  = $('#by-check-01')[0];
    console.log(chexck.checked);
    
    if(chexck.checked &&  byInputN.val()!=0){
        alert('成功支付...'+byHj.text());
        // $.ajax({
        //     type:'GET',
        //     datatype:'json',
        //     data:{
        //         "by-zj":byHj.text(byPrice.text() * byInputN.val())
        //     },
        //     url:'',
        //     success:function(data){
        //         console.log(data.data)
        //     }
        // })
    }else{
        alert('请选择商品...')
    }
})

checkAll();
check();