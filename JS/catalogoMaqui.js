$(document).ready(function(){

    $("#1").click(function(){

        $.ajax({
            url: "../PHP/consCatalogo.php",
            method: "POST",
            dataType:'JSON',
            success: function(dataResponse,responseText,response,statusText){

                var maquinas = dataResponse;

                $("#VentanaTitulo").html(maquinas[0]['Nombre']);
                $("#DesMaqu").html(maquinas[0]['Descripcion']);
                $("#precioMaqui").html("Precio: ₡"+maquinas[0]['Precio']);
                $("#CantidadMaquina").val("");
            }
        });

    });


    $("#3").click(function(){

        $.ajax({
            url: "../PHP/consCatalogo.php",
            method: "POST",
            dataType:'JSON',
            success: function(dataResponse,responseText,response,statusText){

                var maquinas = dataResponse;

                $("#VentanaTitulo").html(maquinas[1]['Nombre']);
                $("#DesMaqu").html(maquinas[1]['Descripcion']);
                $("#CantidadMaquina").val("");
            }
        });

    });

    $("#4").click(function(){

        $.ajax({
            url: "../PHP/consCatalogo.php",
            method: "POST",
            dataType:'JSON',
            success: function(dataResponse,responseText,response,statusText){

                var maquinas = dataResponse;

                $("#VentanaTitulo").html(maquinas[2]['Nombre']);
                $("#DesMaqu").html(maquinas[2]['Descripcion']);
                $("#CantidadMaquina").val("");
            }
        });

    });

    $("#5").click(function(){

        $.ajax({
            url: "../PHP/consCatalogo.php",
            method: "POST",
            dataType:'JSON',
            success: function(dataResponse,responseText,response,statusText){

                var maquinas = dataResponse;

                $("#VentanaTitulo").html(maquinas[3]['Nombre']);
                $("#DesMaqu").html(maquinas[3]['Descripcion']);
                $("#CantidadMaquina").val("");
            }
        });

    });

    $("#6").click(function(){

        $.ajax({
            url: "../PHP/consCatalogo.php",
            method: "POST",
            dataType:'JSON',
            success: function(dataResponse,responseText,response,statusText){

                var maquinas = dataResponse;

                $("#VentanaTitulo").html(maquinas[4]['Nombre']);
                $("#DesMaqu").html(maquinas[4]['Descripcion']);
                $("#CantidadMaquina").val("");
            }
        });

    });

    $("#7").click(function(){

        $.ajax({
            url: "../PHP/consCatalogo.php",
            method: "POST",
            dataType:'JSON',
            success: function(dataResponse,responseText,response,statusText){

                var maquinas = dataResponse;

                $("#VentanaTitulo").html(maquinas[5]['Nombre']);
                $("#DesMaqu").html(maquinas[5]['Descripcion']);
                $("#CantidadMaquina").val("");
            }
        });

    });

    $("#8").click(function(){

        $.ajax({
            url: "../PHP/consCatalogo.php",
            method: "POST",
            dataType:'JSON',
            success: function(dataResponse,responseText,response,statusText){

                var maquinas = dataResponse;

                $("#VentanaTitulo").html(maquinas[6]['Nombre']);
                $("#DesMaqu").html(maquinas[6]['Descripcion']);
                $("#CantidadMaquina").val("");
            }
        });

    });

    $("#9").click(function(){

        $.ajax({
            url: "../PHP/consCatalogo.php",
            method: "POST",
            dataType:'JSON',
            success: function(dataResponse,responseText,response,statusText){

                var maquinas = dataResponse;

                $("#VentanaTitulo").html(maquinas[7]['Nombre']);
                $("#DesMaqu").html(maquinas[7]['Descripcion']);
                $("#CantidadMaquina").val("");
            }
        });

    });

    $("#btn_carrito").click(function(){

        // Tiene que agarrar el id del producto no se como porque es independiente
        // Luego hacer la inserción a la base de datos
        //Traerse la cantidad que quiere

    });


       



});