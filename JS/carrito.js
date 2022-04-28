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

        var ForPago1=$("#ForPago1").val();
        var ForPago2=$("#ForPago2").val();

        var carritoJSON={
            "IDArti":IDArti,
            "ForPago1":ForPago1,
            "ForPago2":ForPago2,
            "LugEntr": LugEntr,
            "FecEntr" : FecEntr,
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

        return false;


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