$(document).ready(function(){

    $.ajax({
        url: "../PHP/consultCarrito.php",
        method: "POST",
        success: function(dataResponse,responseText,response,statusText){

            $('#tablaCarrito').append(dataResponse);


        }
    });


    $("#btn_conReserva").click(function(){

        var IDArti=$("#IDArti").val();
        var MonTota=$("#MonTota").val();
        var IDCar=$("#IDCar").val();
        


        var LugEntr=$("#LugEntr").val();
        if (LugEntr == ""){
            alert ("Por favor ingrese un lugar");
        }

        var FecEntr=$("#FecEntr").val();
        if (FecEntr == "" || FecEntr == 0){
            alert ("Por favor ingrese la Fecha de entrega");
        }


        //ESTO NO SIRVE EL CHECK
        var checkMark=$("form-check").val();
        if (checkMark == ""){
            alert ("Por favor digite la forma de pago");
        }

        var carritoJSON={
            "IDArti":IDArti,
            // "LugEntr": LugEntr,
            // "checkMark" : checkMark,
            "FecEntr" : FecEntr,
            "MonTota": MonTota,
            "IDCar":IDCar

        };

        console.log(FecEntr);
        console.log(MonTota);

        $.ajax({
            url: "../PHP/updateCarrito.php",
            method: "POST",
            data:{objCarJSON: JSON.stringify(carritoJSON)},
            dataType:'JSON',
            success: function(dataResponse,responseText,response,statusText){

                if(dataResponse==1){
                alert("Se ha registrado con exito");
                // location.replace("../HTML/index.html");
                }
                else{
                    alert("Ha ocurrido un error");
                }

 

            }
    
        });

        return false;


    });

});

