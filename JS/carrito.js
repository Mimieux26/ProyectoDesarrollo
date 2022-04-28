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

        //CREAR JSON CARRITO
        var carritoJSON={
            "IDArti":IDArti,
            "MonTota": MonTota,
            "IDCar":IDCar

        };

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

        var Cedula=$("#Cedula").val();
        

        //TABLA RESERVAS
        var LugEntr=$("#LugEntr").val();
        if (LugEntr == ""){
            alert ("Por favor ingrese un lugar");
        }

        var FecEntr=$("#FecEntr").val();
        if (FecEntr == "" || FecEntr == 0){
            alert ("Por favor ingrese la Fecha de entrega");
        }

        //validacion radio
        var greenflag = true;
        for (x = 0; x < frmCarrito.length; x++) {
            if((frmCarrito.elements[x].type == "radio") && (frmCarrito.elements[x].name == "radioCheck")){

                if(frmCarrito.elements[x].checked){
                    greenflag = false;
                }
            }
        }
        if (greenflag){
            alert("Debe seleccionar una opcion de pago");
            return false;
        }
        var MetPago;
        var ForPago1=$("#ForPago1").checked;
        if(ForPago1 == true){
            MetPago = 1;
        }
        else{
            MetPago = 2;

        }
        
   

         //CREAR JSON CARRITO
         var reservaJSON={
            "IDCar":IDCar,
            "MetPago":MetPago,
            "LugEntr": LugEntr,
            "FecEntr" : FecEntr,
            "Cedula" : Cedula

        };

        //AJAX MANDA A RESERVA
        $.ajax({
            url: "../PHP/insertReserva.php",
            method: "POST",
            data:{objResJSON: JSON.stringify(reservaJSON)},
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
        


    });


});

function delete_car(valor){

    var IDCar=valor;

    $.ajax({
        url: "../PHP/deleteCar.php",
        data: {IDCar: IDCar},
        method: "POST",
        success: function(dataResponse,responseText){
            if(dataResponse==1){
                alert("Se ha eliminado con exito");
                location.reload();
            }
            
        }

    });



}