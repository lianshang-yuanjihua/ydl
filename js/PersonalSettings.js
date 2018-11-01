//取消修改名称按钮
function popCancel() {
    $('.by-pop-cancel').click(function () {
        $('.by-pop-box').addClass('mui-hidden').find('.by-pop-boxCenter-css').addClass('mui-hidden');
        $('.by-pop-input input').val('');
    })
}
//确认修改名称按钮
function popconfirm() {
    $('.by-pop-btn-succes').click(function () {
        if ($('.by-pop-input input').val() == "" || $('.by-pop-input input').val() == "null" || $('.by-pop-input input').val() == "undefine") {
            mui.alert('输入内容错误...');
        } else if($('.by-pop-input input').val().length >=2 && $('.by-pop-input input').val().length<=10){
            console.log($('.by-pop-input input').val().length);
            // $.ajax({
            //     type:'GET',
            //     url:'',
            //     datatype:'json',
            //     data:{
            //         'pwd':$('.by-pop-input input').val(),
            //     },
            //     succes:function(res){
            //         console(res);
            //     }   
            // })
            $('.by-personset-name').text($('.by-pop-input input').val());
            $('.by-pop-input input').val('');
            $('.by-pop-box').addClass('mui-hidden');
        }else{
            mui.alert('内容长度不符合要求');
        }
    })
}
$('.by-person-nameBox').click(function () {
    $('.by-pop-box').removeClass('mui-hidden').find('.by-pop-boxCenter').removeClass('mui-hidden');

})
popconfirm();
popCancel();

//支付密码输入取消按钮
function payoneCancel() {
    $('.by-payone-cancel').click(function () {
        $('.by-pop-box').addClass('mui-hidden').find('.by-pop-boxCenter-css').addClass('mui-hidden');
        $('.by-pay-hiddenPwd').val($('.by-payone-input').val());
        $('.by-payone-input').val('');
    })
}
//支付密码成功按钮
function payoneSucces() {
    var regPay = /^(\w){6,20}$/;
    $('.by-payone-succes').click(function () {
        if (regPay.test($('.by-payone-input').val())) {
            $('.by-pay-hiddenPwd').val($('.by-payone-input').val());
            $('.by-payone-input').val('');
            $('.by-pay-twobox').removeClass('mui-hidden').prev().addClass('mui-hidden');
        }else{
            mui.alert('密码格式不对...')
        }
    })
}

//支付验证取消按钮
function paytwocansel() {
    $('.by-paytwo-cancel').click(function(){
        $('.by-pop-box').addClass('mui-hidden').find('.by-pop-boxCenter-css').addClass('mui-hidden');
    })
}
//支付验证成功按钮
function paytwosucces() {
    $('.by-paytwo-succes').click(function(){
        if( $('.by-pay-hiddenPwd').val()==$('.by-paytwo-input').val()){
            // $.ajax({
            //     type:'GET',
            //     url:'',
            //     datatype:'json',
            //     data:{
            //         'pwd':$('.by-paytwo-input').val(),
            //     },
            //     succes:function(res){
            //         console(res);
            //     }   
            // })
            mui.alert('修改成功');
            $('.by-pay-hiddenPwd').val('');
            $('.by-paytwo-input').val('');
            $('.by-pop-box').addClass('mui-hidden').find('.by-pop-boxCenter-css').addClass('mui-hidden');
           
        }else{
            $('.by-paytwo-input').val('');
            mui.alert('两次输入不一致')
        }
    })
}

//点击支付密码
$('.by-pay-payset').click(function(){
    $('.by-pop-box').removeClass('mui-hidden').find('.by-pay-onebox').removeClass('mui-hidden');
    
})
payoneCancel();
payoneSucces();
paytwosucces();
paytwocansel();

// ?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$