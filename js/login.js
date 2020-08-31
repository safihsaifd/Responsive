function login(){
	var _uname=uname.value;
	var _upwd=upwd.value;
	if(!_uname){
	    alert('不要为空');return;
	}
	if(!_upwd){
	    alert('不要为空');return;
	}
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			var r=xhr.responseText;
			if(r==1){
				alert('欢迎登录');
				location.href="../public/head.html"
			}else{
				alert("账号密码错误或重新注册账号");
			}
		}
	}
	xhr.open("get",`/ajax/login/${_uname}&${_upwd}`,true");
	xhr.send();
}