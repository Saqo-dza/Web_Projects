 var blocks=document.getElementsByTagName("div");
var images=["5.jpg","3.jpg","4.jpg","2.jpg","6.png"];

function SetImig(){
for(var i=0;i<blocks.length;i++ ){
blocks[i].innerHTML='<img src="'+ images[i]+'" width="200px" height="100px">';

}
}
 SetImig();//senc voncvor js ov em nkarner@ dnum

  
function goToLeft(){
var LeftElem=images.shift();
images.push(LeftElem);
SetImig();
}


function goToRight(){
var rightElem=images.pop();
images.unshift(rightElem);
 SetImig();
}

function auto(){
	     if(images.length>0){
			 goToLeft();
		 }
			  
  }
 var a=setInterval("auto()",1000);