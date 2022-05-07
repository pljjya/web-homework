/*
	jQuery
*/	
$(document).ready(function(){
	$("#b1").click(function(){
		$(this).css('background','orange');
		$("#b2").css('background','#0169b2');
		$("#b3").css('background','#0169b2');
		$("#b4").css('background','#0169b2');
		$("#four").hide();
		$("#one").show();
		$("#two").hide();
		$("#three").hide();
	});

	$("#b2").click(function(){
		$(this).css('background','orange');
		$("#b1").css('background','#0169b2');
		$("#b3").css('background','#0169b2');
		$("#b4").css('background','#0169b2');
		$("#four").hide();
		$("#one").hide();
		$("#two").show();
		$("#three").hide();
	});

	$("#b3").click(function(){
		$(this).css('background','orange');
		$("#b1").css('background','#0169b2');
		$("#b2").css('background','#0169b2');
		$("#b4").css('background','#0169b2');
		$("#four").hide();
		$("#one").hide();
		$("#two").hide();
		$("#three").show();
	});
	$("#b4").click(function(){
		$(this).css('background','orange');
		$("#b1").css('background','#0169b2');
		$("#b2").css('background','#0169b2');
		$("#b3").css('background','#0169b2');
		$("#three").hide();
		$("#one").hide();
		$("#two").hide();
		$("#four").show();
	});
});

$(document).ready(function(){
		$(".imgp").hide();

		/*img1*/
		$("#img1").click(function(){
			$(".img").fadeTo(300,0.5);
			$("#img11").fadeIn(200);
		});
		$("#img11").click(function(){
			$(".img").fadeTo(300,1);
			$("#img11").fadeOut(200);
  		});

		/*img2*/
  		$("#img2").click(function(){
			$(".img").fadeTo(300,0.5);
			$("#img22").fadeIn(200);
		});
		$("#img22").click(function(){
			$(".img").fadeTo(300,1);
			$("#img22").fadeOut(200);
  		});

		/*img3*/
  		$("#img3").click(function(){
			$(".img").fadeTo(300,0.5);
			$("#img33").fadeIn(200);
		});
		$("#img33").click(function(){
			$(".img").fadeTo(300,1);
			$("#img33").fadeOut(200);
  		});

		/*img4*/
  		$("#img4").click(function(){
			$(".img").fadeTo(300,0.5);
			$("#img44").fadeIn(200);
		});
		$("#img44").click(function(){
			$(".img").fadeTo(300,1);
			$("#img44").fadeOut(200);
  		});
});
$(document).ready(function(){
	function doo(){
		$(".tail").click(function(){
			var last = $("#data li").last().index();
			var child = $(this).parent().index();
			var node=$(this).parent();
			for(var i=child;i<=last;i++){
				node.find(".head").text(node.find(".head").text()-1);
				node=node.next();
			}
			$(this).parent().remove();
		});
	}
	doo();
	$("#bt").click(function(){
		var str=document.getElementById("content").value;
		var ul=$("#data");
		var li = document.createElement("li");
		var div1 = document.createElement("div");
		var div2 = document.createElement("div");
		var div3 = document.createElement("div");
		ul[0].appendChild(li);
		div1.className="head";
		div1.innerHTML=$("#data li").last().index()+1;
		div2.className="main";
		div2.innerHTML=str;
		div3.className="tail";
		div3.innerHTML="Delete";
		li.appendChild(div1);
		li.appendChild(div2);
		li.appendChild(div3)
		doo();
	});
});