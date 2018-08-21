$(document).ready(function(){

var app={

  viewportWidth:$(window).width(),
    windowSize:function()
	  {
		  
		if (this.viewportWidth < 510)
		 {
			 $(".TopList").fadeOut(01);
			 $("#remove").removeClass("TopRightSide").addClass("AdTopList");
			 $(".del").removeClass("border");
			 $("#toggle").css("display", "inline");
		 }
	  }

         }
	 app.windowSize();
	 $(window).resize(function () 
	   {
         var viewportWidth = $(window).width();
		
		   if (this.viewportWidth < 510) 
		     {
				$(".TopList").fadeOut(1);
				$("#remove").removeClass("TopRightSide").addClass("AdTopList");
				$(".del").removeClass("border");
			    $("#toggle").css("display", "inline");
		     }
			 
			if (this.viewportWidth > 510) 
			 {
				$("#toggle").css("display", "none");
				$("#remove").removeClass("AdTopList").addClass("TopRightSide");
				$(".del").addClass("border");
				$(".TopList").fadeIn();
					
			 }
		});

     $("#toggle").bind("click",function()
	  {
	   $(".TopList").slideToggle();
	  });


});