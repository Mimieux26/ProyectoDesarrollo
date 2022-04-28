$(document).ready(function(){


    $.ajax({
        url: "../PHP/comenRese.php",
        method: "POST",
        success: function(dataResponse,responseText,response,statusText){

            $('#containerCali').append(dataResponse);


        }
    });


});
