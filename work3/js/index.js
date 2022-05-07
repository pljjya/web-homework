
function doclick1(){
	document.getElementById("p1").addEventListener("click",alert("p1"));
	document.getElementById("p1").style.color="red";
}
function doclick2(){
	document.getElementById("p2").addEventListener("click",alert("p2"));
	var d=new Date();
	document.getElementById("p1").innerHTML=d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate();
}
function doclick3(){
	document.getElementById("p3").addEventListener("click",alert("p3"));
	document.getElementById("p3").classList.add("fn-active");
}
function doclick4(){
	document.getElementById("p4").addEventListener("click",alert("p4"));
	document.getElementById("p8").remove();
}
function doclick5(){
	document.getElementById("p5").addEventListener("click",alert("p5"));
	window.open("https://www.taobao.com/");
}
function doclick6(){
	document.getElementById("p6").addEventListener("click",alert("p6"));
	var ul=document.getElementById("ul");
	var elem = document.createElement("li");
	var text = document.createTextNode("p9");
	elem.appendChild(text);
	ul.appendChild(elem);
}
function doclick7(){
	document.getElementById("p7").addEventListener("click",alert("p7"));
	document.getElementById("div").style.width="100%";
}



