function myFunction() {
    var blh=document.getElementsByTagName("input")[0].value;
    document.getElementById("view").style.height = blh*10+"px";
}

function myFunction1() {
    var blw=document.getElementsByTagName("input")[1].value;
    document.getElementById("view").style.width = blw*10+"px";
}
function myFunction2() {
   var boh=document.getElementsByTagName("input")[2].value;
    document.getElementById("view").style.border= +boh+"px solid #a0a99a";
}

function onclickRadio() {

	var boh=document.getElementsByTagName("input")[2].value;
  var bos = document.getElementsByName('anun');
  for (var i = 0; i < bos.length; i++) {
    if (bos[i].type === 'radio' && bos[i].checked) {
        RadioVal = bos[i].value;       
    }
  }
 if(RadioVal==1){document.getElementById("view").style.border= +boh+"px solid #a0a99a" ;}
   if(RadioVal==2){document.getElementById("view").style.border= +boh+"px dashed #a0a99a";}
   if(RadioVal==3){document.getElementById("view").style.border= +boh+"px dotted #a0a99a";}
}
function myFunction4(){
	var bor=document.getElementsByTagName("input")[6].value;
	document.getElementById("view").style.borderRadius = +bor+"px";

}

function myf5(){
	x=$("input").eq(7).val();
	$("div").css("border-color",x);
}


function imgh() {
	var img= document.getElementById("nkar");
	if(img){
		 var ih=document.getElementsByTagName("input")[8].value;
    	img.style.height = ih*10+"px";
	}
}

function imgw() {
	var img= document.getElementById("nkar");
	if(img){
		 var ih=document.getElementsByTagName("input")[9].value;
    	img.style.width = ih*10+"px";
	}
}


function f1() {
    var i=document.getElementsByTagName("input")[10].value;
    document.getElementById("t").innerHTML=i;
}
function textf() {
    var tf=document.getElementsByTagName("input")[11].value;
    document.getElementById("t").style.fontSize = tf*2+"%";
}
function click1() {
  var bos = document.getElementsByName('a');
  for (var i = 0; i < bos.length; i++) {
    if (bos[i].type === 'radio' && bos[i].checked) {
        RadioVal = bos[i].value;       
    }
  }
 if(RadioVal==1){document.getElementById("t").style.fontFamily= "arial";}
 if(RadioVal==2){document.getElementById("t").style.fontFamily= "sans-serif";}
  
}
function textcolor(){
	var c=document.getElementsByTagName("input")[14].value;
	document.getElementById("t").style.color = c;
	
}

