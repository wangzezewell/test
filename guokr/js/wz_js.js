'use strict'
function getByClass(obj,sClass){
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(sClass);
	}else{
		var aRes=[];
		var aEle=obj.getElementsByTagName('*');
		for(var i=0;i<aEle.length;i++){
			var aClass=aEle[i].className.split(' ');
			if(findInArr(sClass,aClass)){
				aRes.push(aEle[i]);
			}
		}
		return aRes;
	}
}
function findInArr(n,arr){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==n){
			return true;
		}
	}
	return false;
}
function addClass(obj,sClass){
	if(obj.className){
		var re=new RegExp('\\b'+sClass+'\\b');
		if(obj.className.search(re)==-1){
			obj.className+=' '+sClass;
		}
	}else{
		obj.className=sClass;
	}
}
//移除
function removeClass(obj,sClass){
	if(obj.className){
		var re=new RegExp('\\b'+sClass+'\\b');
		obj.className=obj.className.replace(re,'').replace(/\s+/g,' ').replace(/^\s+|\s+$/g,'');
	}
	if(obj.className==''){
		obj.removeAttribute('class');
	}
}
//选项卡
function tab(id,eventType){
	var oSH = document.getElementById(id);
	var oBtn=getByClass(oSH,'fash_title')[0].getElementsByTagName('span');
	var aGifBox=getByClass(oSH,'content');
	for(var i=0;i<oBtn.length;i++){
		oBtn[i].index=i;
		oBtn[i][eventType]=function(){
			for(var i=0;i<oBtn.length;i++){
				oBtn[i].className="";
				removeClass(aGifBox[i],'show');
			}
			this.className="on";
			addClass(aGifBox[this.index],'show');
		}
	}
}

/*window.onload=function(){
	var oFooter=document.getElementById('footer');
	var aPicBtn=getByClass(oFooter,'yyj-footer-nav')[0].getElementsByTagName('span');
	var aGifBox=getByClass(oFooter,'yyj-gifbox');
	tab(aPicBtn,aGifBox);
}*/































