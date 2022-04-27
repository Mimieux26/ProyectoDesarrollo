$(document).ready(function(){


    $.ajax({
        url: "../PHP/consCatalogo.php",
        method: "POST",
        success: function(dataResponse,responseText,response,statusText){

            $('#containerMaqui').append(dataResponse);


        }
    });



   


       



});