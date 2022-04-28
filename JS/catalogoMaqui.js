$(document).ready(function(){


    $.ajax({
        url: "../PHP/consCatalogo.php",
        method: "POST",
        success: function(dataResponse,responseText,response,statusText){

            $('#containerMaqui').append(dataResponse);


        }
    });





});

function insert_car(IDArti){

    $.ajax({
        url: "../PHP/carrito.php",
        data: {IDArti: IDArti},
        method: "POST",
        
        success: function(dataResponse,responseText){
            
            var data=dataResponse;
            console.log(data);

       
        }

    });



}