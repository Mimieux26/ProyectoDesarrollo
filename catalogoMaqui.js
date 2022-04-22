$(document).ready(function(){


   

    $.ajax({


        url: "consCatalogo.php",
        method: "POST",
        dataType:'JSON',
        success: function(dataResponse,responseText,response,statusText){


            var maquinas = dataResponse;

            console.log(maquinas[0]["Descripcion"]);

        }

    });






});