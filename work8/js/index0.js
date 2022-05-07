/*
	非jQuery
*/	
	document.getElementById("b1").onclick=function(){
		document.getElementById("b1").css('background','orange');
		document.getElementById("b2").css('background','#0169b2');
		document.getElementById("b3").css('background','#0169b2');
		document.getElementById("b4").css('background','#0169b2');
		document.getElementById("four").hide();
		document.getElementById("one").show();
		document.getElementById("two").hide();
		document.getElementById("three").hide();
	};

	document.getElementById("b2").onclick=function(){
		document.getElementById("b2").css('background','orange');
		document.getElementById("b1").css('background','#0169b2');
		document.getElementById("b3").css('background','#0169b2');
		document.getElementById("b4").css('background','#0169b2');
		document.getElementById("four").hide();
		document.getElementById("one").hide();
		document.getElementById("two").show();
		document.getElementById("three").hide();
	};

	document.getElementById("b3").onclick=function(){
		document.getElementById("b3").css('background','orange');
		document.getElementById("b1").css('background','#0169b2');
		document.getElementById("b2").css('background','#0169b2');
		document.getElementById("b4").css('background','#0169b2');
		document.getElementById("four").hide();
		document.getElementById("one").hide();
		document.getElementById("two").hide();
		document.getElementById("three").show();
	};
	document.getElementById("b4").onclick=function(){
		document.getElementById("b4").css('background','orange');
		document.getElementById("b1").css('background','#0169b2');
		document.getElementById("b2").css('background','#0169b2');
		document.getElementById("b3").css('background','#0169b2');
		document.getElementById("three").hide();
		document.getElementById("one").hide();
		document.getElementById("two").hide();
		document.getElementById("four").show();
	};


		document.getElementsByClassName("imgp").hide();

		/*img1*/
		document.getElementById("img1").onclick=function(){
			document.getElementsByClassName("img").fadeTo(300,0.5);
			document.getElementById("img11").fadeIn(200);
		};
		document.getElementById("img11").onclick=function(){
			document.getElementsByClassName("img").fadeTo(300,1);
			document.getElementById("img11").fadeOut(200);
  		};

		/*img2*/
  		document.getElementById("img2").onclick=function(){
			document.getElementsByClassName("img").fadeTo(300,0.5);
			document.getElementById("img22").fadeIn(200);
		};
		document.getElementById("img22").onclick=function(){
			document.getElementsByClassName("img").fadeTo(300,1);
			document.getElementById("img22").fadeOut(200);
  		};

		/*img3*/
  		document.getElementById("img3").onclick=function(){
			document.getElementsByClassName("img").fadeTo(300,0.5);
			document.getElementById("img33").fadeIn(200);
		};
		document.getElementById("img33").onclick=function(){
			document.getElementsByClassName("img").fadeTo(300,1);
			document.getElementById("img33").fadeOut(200);
  		};

		/*img4*/
  		document.getElementById("img4").onclick=function(){
			document.getElementsByClassName("img").fadeTo(300,0.5);
			document.getElementById("img44").fadeIn(200);
		};
		document.getElementById("img44").onclick=function(){
			document.getElementsByClassName("img").fadeTo(300,1);
			document.getElementById("img44").fadeOut(200);
  		};


	function doo(){
		document.getElementsByClassName("tail").onclick=function(){
			var last = document.getElementById("data").lastChild().index();
			var child = this.parentNode.index;
			var node=this.parentNode;
			for(var i=child;i<=last;i++){
				node.find(".head").text(node.find(".head").text()-1);
				node=node.next();
			}
			this.parentNode.remove();
		};
	}
	
	document.getElementById("bt").onclick=function(){
		var str=document.getElementById("content").value;
		var ul=document.getElementById("data");
		var li = document.createElement("li");
		var div1 = document.createElement("div");
		var div2 = document.createElement("div");
		var div3 = document.createElement("div");
		ul[0].appendChild(li);
		div1.className="head";
		div1.innerHTML=document.getElementById("data").lastChild().index()+1;
		div2.className="main";
		div2.innerHTML=str;
		div3.className="tail";
		div3.innerHTML="Delete";
		li.appendChild(div1);
		li.appendChild(div2);
		li.appendChild(div3)
		doo();
	};