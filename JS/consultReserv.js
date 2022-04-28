$(document).ready(function(){


    $.ajax({
        url: "../PHP/consMisReser.php",
        method: "POST",
        success: function(dataResponse,responseText,response,statusText){

            $('#accordionReseAdmin').append(dataResponse);


        }
    });




});

function delete_reser(valor){

    var IDRese=valor;

    $.ajax({
        url: "../PHP/deleteRese.php",
        data: {IDRese: IDRese},
        method: "POST",
        success: function(dataResponse,responseText){
            if(dataResponse==1){
                alert("Se ha eliminado con exito");
                location.reload();
            }
            
        }

    });



}

function process_reser(valor){
    var IDRese=valor;
    var estado=$("#selectEstado").val();

    $.ajax({
        url: "../PHP/updateEstReser.php",
        data: {IDRese: IDRese,estadoRese: estado},
        method: "POST",
        success: function(dataResponse,responseText){
            if(dataResponse==1){
                alert("Se ha Actualizado con exito");
                location.reload();
            }
            
        }

    });


}
