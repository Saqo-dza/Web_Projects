
$(document).ready(function(){
//------------------------------------ TopList Toggle-----------------------------------
	 function WindowSize() 
	 {
       var viewportWidth = $(window).width();
	   
	      if (viewportWidth < 510)
		   {
			 $(".TopList").fadeOut(01);
			 $("#remove").removeClass("TopRightSide").addClass("AdTopList");
			 $(".del").removeClass("border");
			 $("#toggle").css("display", "inline");
	       }
	 }
	 WindowSize();
			  
	   $(window).resize(function () 
	   {
         var viewportWidth = $(window).width();
		
		   if (viewportWidth < 510) 
		     {
				$(".TopList").fadeOut(1);
				$("#remove").removeClass("TopRightSide").addClass("AdTopList");
				$(".del").removeClass("border");
			    $("#toggle").css("display", "inline");
		     }
			 
			if (viewportWidth > 510) 
			 {
				$("#toggle").css("display", "none");
				$("#remove").removeClass("AdTopList").addClass("TopRightSide");
				$(".del").addClass("border");
				$(".TopList").fadeIn();
					
			 }
		});
	 $("#toggle").bind("click",function(){
		 $(".TopList").slideToggle();
	 });
//-----------------------------------------------------------------------------------------------
	  
 });
