$(document).ready(function(){


    $.ajax({
        url: "../PHP/consultExpAdmin.php",
        method: "POST",
        success: function(dataResponse,responseText,response,statusText){

            $('#accordionExpAdmin').append(dataResponse);


        }
    });




});
