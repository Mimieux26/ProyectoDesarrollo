$(document).ready(function(){
    var idRol;
    $.ajax({
        url: "mainMenuphp.php",
        method: "POST",
        success: function(dataResponse,responseText,response,statusText){
            
            idRol=parseInt(dataResponse);
            console.log(idRol);

            if(idRol==1){
                $("#adminOption").hide();
                
        
            }
            else if(idRol==2){
                $("#regularOption").hide();
                
            }
        

            
        }

    });








});