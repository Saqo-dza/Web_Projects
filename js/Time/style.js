var haur=document.getElementById("hour");
var sec=document.getElementById("sec");
var min=document.getElementById("min");

function Clock(){
	var now=new Date();
	var Haurs=now.getHours();
	var Seconds=now.getSeconds();
	var Minutes=now.getMinutes();
	
	var s=Seconds*6;
	var m=Minutes*6;
	var h=0.5*Haurs;
	var ht;
	if(Haurs<12){ht=Haurs*30;}
	else{ht=(Haurs-12)*30;}
	
	sec.style.webkitTransform="rotate("+s+"deg)";
		min.style.webkitTransform="rotate("+m+"deg)";
			haur.style.webkitTransform="rotate("+(h+ht)+"deg)";
}
setInterval(Clock,100);


var p=document.getElementsByTagName("span");
	function jam(){
	var now=new Date();
	var Haurs=now.getHours();
	var Seconds=now.getSeconds();
	var Minutes=now.getMinutes();
	if(Haurs<10){Haurs="0"+Haurs;}
	if(Seconds<10){Seconds="0"+Seconds;}	
    if(Minutes<10){Minutes="0"+Minutes;}	
	   if(Seconds%2==0){
		p[1].innerHTML="";
		p[3].innerHTML="";}
		    
	else {p[1].innerHTML=":";
		  p[3].innerHTML=":";}
			
	    p[0].innerHTML=Haurs;
		p[2].innerHTML=Minutes;
		p[4].innerHTML=Seconds;
		         }
setInterval(jam,100);
