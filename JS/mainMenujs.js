$(document).ready(function(){
    var idRol;
    $.ajax({
        url: "../PHP/mainMenuphp.php",
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

    $("#btnCloseSession").click(function(){
        $.ajax({
            url: "../PHP/closeSession.php",
            method: "POST",
            success: function(dataResponse,responseText,response,statusText){
                if(dataResponse==1){
                    setTimeout(8000);
                    alert("Se cerrará la sesión");
                    
                }
                
                
                
            }
    
        });

        






    });








});