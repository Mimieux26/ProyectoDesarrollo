$(document).ready(function(){


    $.ajax({
        url: "../PHP/comenRese.php",
        method: "POST",
        success: function(dataResponse,responseText,response,statusText){

            $('#containerCali').append(dataResponse);


        }
    });


});

function insert_com(valor){

    var comentario=$("#comentario").val();
    var IDRese=valor;
    var calificacion;
    var cali=$("#5").checked;

    if (cali == true){
        calificacion = 5;
    }
    else{
        var cali=$("#4").checked;
        if (cali == true){
            calificacion = 4;
        }
        else{
            var cali=$("#3").checked;
            if (cali == true){
                calificacion = 3;
            }
            else{
                var cali=$("#2").checked;
                if (cali == true){
                    calificacion = 2;
                }
                else{
                    calificacion = 1;
                }
            }
            
        }
    }



    $.ajax({
        url: "../PHP/updateRese.php",
        data: {comentario: comentario, IDRese: IDRese, calificacion: calificacion},
        method: "POST",
        success: function(dataResponse,responseText){
            if(dataResponse==1){
                alert("Se ha registrado con exito");
                 location.reload();
            }
            
        }

    });



}