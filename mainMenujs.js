$(document).ready(function(){
    $.ajax({
        url: "mainMenuphp.php",
        method: "POST",
        success: function(dataResponse,responseText,response,statusText){
            console.log(dataResponse);
            

        }

    });







});