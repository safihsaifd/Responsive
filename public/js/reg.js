function reg(){
    var _uname=uname.value;
    var _upwd=upwd.value;
    var _phone=phone.value;
    var _sex=-1;
    if(man.checked==true){
        _sex=1;
    }else if(woman.checked==true){
        _sex=0;
    }else{
        _sex=-1;
    }
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var r=xhr.responseText;
            if(r>0){
                if(health.checked==true){
                    alert('注册成功');
                    location.href="login.html"; 
                }else{
                    alert('请勾选服务条款');
                }
                }else{
                    alert('注册失败');
                }
        }
    }
    xhr.open('post','/ajax/reg',true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    var formdata=`uname=${_uname}&upwd=${_upwd}&phone${_phone}&sex=${_sex}`;
    xhr.send(formdata);
}
function check(){
    var _uname=uname.value
    var _upwd=upwd.value;
    var _upwd1=upwd1.value;
    var _phone=phone.value;  
    if(!_phone){
        check1.innerHTML="电话不能为空";
    }else{
        check1.innerHTML="√";
    }
    if(!_uname){
        check2.innerHTML="用户名不能为空";
    }else{
        check2.innerHTML="√";
    }
    if(!_upwd){
        check3.innerHTML="密码不能为空";
    }else{
        check3.innerHTML="√";
    }
    if(_upwd1!=_upwd){
        check4.innerHTML="×";
    }else{
        check4.innerHTML="√";
    }
}