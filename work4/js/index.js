function showline1(){
	document.getElementById("f1").style.cssText="border-bottom:3px solid red";
	document.getElementById("f2").style.cssText="border-bottom:none";
	document.getElementById("f3").style.cssText="border-bottom:none";
	document.getElementById("f4").style.cssText="border-bottom:none";
	document.getElementById("f5").style.cssText="border-bottom:none";
}
function showline2(){
	document.getElementById("f2").style.cssText="border-bottom:3px solid red";
	document.getElementById("f1").style.cssText="border-bottom:none";
	document.getElementById("f3").style.cssText="border-bottom:none";
	document.getElementById("f4").style.cssText="border-bottom:none";
	document.getElementById("f5").style.cssText="border-bottom:none";
}
function showline3(){
	document.getElementById("f3").style.cssText="border-bottom:3px solid red";
	document.getElementById("f1").style.cssText="border-bottom:none";
	document.getElementById("f2").style.cssText="border-bottom:none";
	document.getElementById("f4").style.cssText="border-bottom:none";
	document.getElementById("f5").style.cssText="border-bottom:none";
}
function showline4(){
	document.getElementById("f4").style.cssText="border-bottom:3px solid red";
	document.getElementById("f1").style.cssText="border-bottom:none";
	document.getElementById("f2").style.cssText="border-bottom:none";
	document.getElementById("f3").style.cssText="border-bottom:none";
	document.getElementById("f5").style.cssText="border-bottom:none";
}
function showline5(){
	document.getElementById("f5").style.cssText="border-bottom:3px solid red";
	document.getElementById("f1").style.cssText="border-bottom:none";
	document.getElementById("f2").style.cssText="border-bottom:none";
	document.getElementById("f3").style.cssText="border-bottom:none";
	document.getElementById("f4").style.cssText="border-bottom:none";
}
function doclick1(){
	document.getElementById("l1").style.cssText="color:red;border:2px solid red;border-bottom:2px solid #f4f4f4";
	document.getElementById("l2").style.cssText="border:2px solid #F4F4F4;border-left:none;border-bottom:2px solid red";
	document.getElementById("l3").style.cssText="border:2px solid #F4F4F4;border-left:none;border-bottom:2px solid red";
	document.getElementById("l4").style.cssText="border:2px solid #F4F4F4;border-left:none;border-bottom:2px solid red";
}
function doclick2(){
	document.getElementById("l2").style.cssText="color:red;border:2px solid red;border-bottom:2px solid #f4f4f4";
	document.getElementById("l1").style.cssText="border:2px solid #F4F4F4;border-right:none;border-bottom:2px solid red";
	document.getElementById("l3").style.cssText="border:2px solid #F4F4F4;border-left:none;border-bottom:2px solid red";
	document.getElementById("l4").style.cssText="border:2px solid #F4F4F4;border-left:none;border-bottom:2px solid red";
}
function doclick3(){
	document.getElementById("l3").style.cssText="color:red;border:2px solid red;border-bottom:2px solid #f4f4f4";
	document.getElementById("l1").style.cssText="border:2px solid #F4F4F4;border-right:none;border-bottom:2px solid red";
	document.getElementById("l2").style.cssText="border:2px solid #F4F4F4;border-right:none;border-bottom:2px solid red";
	document.getElementById("l4").style.cssText="border:2px solid #F4F4F4;border-left:none;border-bottom:2px solid red";
}
function doclick4(){
	document.getElementById("l4").style.cssText="color:red;border:2px solid red;border-bottom:2px solid #f4f4f4";
	document.getElementById("l1").style.cssText="border:2px solid #F4F4F4;border-right:none;border-bottom:2px solid red";
	document.getElementById("l2").style.cssText="border:2px solid #F4F4F4;border-right:none;border-bottom:2px solid red";
	document.getElementById("l3").style.cssText="border:2px solid #F4F4F4;border-right:none;border-bottom:2px solid red";
}