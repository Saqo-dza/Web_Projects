


$(document).ready(function(){
   $("#loadImageFileAsURL").one("click", function()
{
	var filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0)
    {
        var fileToLoad = filesSelected[0];

        if (fileToLoad.type.match("image.*"))
        {
            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent) 
            {
                var imageLoaded = document.createElement("img");
				
				 imageLoaded.src = fileLoadedEvent.target.result;
				 imageLoaded.style.width="100px";
				 imageLoaded.id="nkar";
				 document.getElementById("loaded").appendChild(imageLoaded);
				
                
            };
            fileReader.readAsDataURL(fileToLoad);
        }
    }
});

});




