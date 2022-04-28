$(document).ready(function(){


    $.ajax({
        url: "../PHP/consCatalogo.php",
        method: "POST",
        success: function(dataResponse,responseText,response,statusText){

            $('#containerMaqui').append(dataResponse);


        }
    });





});

function insert_car(valor){

    var cantArti=$("#CantidadMaquina"+valor).val();
    if(cantArti==""||cantArti==0){
        alert("No puede estar vacia la cantidad");
        return false;
    }

    var CanDias=$("#CanDias"+valor).val();
    if(CanDias==""||CanDias==0){
        alert("No puede estar vacia la cantidad de Días");
        return false;
    }

    var IDArti=valor;
    var precioMaqui=$("#precioMaqui"+valor).val();

    $.ajax({
        url: "../PHP/insertCarrito.php",
        data: {IdArt: IDArti, cantA: cantArti, precioM: precioMaqui, CanDias:CanDias},
        method: "POST",
        success: function(dataResponse,responseText){
            if(dataResponse==1){
                alert("Se ha registrado con exito");
                 location.reload();
            }
            
        }

    });



}