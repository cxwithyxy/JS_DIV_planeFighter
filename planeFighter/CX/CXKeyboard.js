//	按键类
//	by chenxuan20141207
var CXKeyboard=function (){
	this.listen=function (){
		//	开始监听键盘按键
		var _this=this;
		document.onkeydown=function (e){
			e=window.event||event||e;
			_this.keyList[e.keyCode]=true;
			// trace(e.keyCode);
		}
		document.onkeyup=function (e){
			e=window.event||event||e;
			_this.keyList[e.keyCode]=false;
		}
	}
	this.unlisten=function (){
		//	停止监听键盘按键
		document.onkeydown=document.onkeyup=null;
	}
	this.getKey=function (keyCode){
		//	获得一个键的状态
		return !!this.keyList[keyCode];
	}
	this.keyList=[];
}