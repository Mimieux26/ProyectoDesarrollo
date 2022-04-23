$(document).ready(function(){

    $("#1").click(function(){

        $.ajax({
            url: "consCatalogo.php",
            method: "POST",
            dataType:'JSON',
            success: function(dataResponse,responseText,response,statusText){

                var maquinas = dataResponse;

                $("#VentanaTitulo").html(maquinas[0]['Nombre']);
                $("#DesMaqu").html(maquinas[0]['Descripcion']);
            }
        });

    });


    $("#3").click(function(){

        $.ajax({
            url: "consCatalogo.php",
            method: "POST",
            dataType:'JSON',
            success: function(dataResponse,responseText,response,statusText){

                var maquinas = dataResponse;

                $("#VentanaTitulo").html(maquinas[1]['Nombre']);
                $("#DesMaqu").html(maquinas[1]['Descripcion']);
            }
        });

    });

    $("#4").click(function(){

        $.ajax({
            url: "consCatalogo.php",
            method: "POST",
            dataType:'JSON',
            success: function(dataResponse,responseText,response,statusText){

                var maquinas = dataResponse;

                $("#VentanaTitulo").html(maquinas[2]['Nombre']);
                $("#DesMaqu").html(maquinas[2]['Descripcion']);
            }
        });

    });

    $("#5").click(function(){

        $.ajax({
            url: "consCatalogo.php",
            method: "POST",
            dataType:'JSON',
            success: function(dataResponse,responseText,response,statusText){

                var maquinas = dataResponse;

                $("#VentanaTitulo").html(maquinas[3]['Nombre']);
                $("#DesMaqu").html(maquinas[3]['Descripcion']);
            }
        });

    });

    $("#6").click(function(){

        $.ajax({
            url: "consCatalogo.php",
            method: "POST",
            dataType:'JSON',
            success: function(dataResponse,responseText,response,statusText){

                var maquinas = dataResponse;

                $("#VentanaTitulo").html(maquinas[4]['Nombre']);
                $("#DesMaqu").html(maquinas[4]['Descripcion']);
            }
        });

    });

    $("#7").click(function(){

        $.ajax({
            url: "consCatalogo.php",
            method: "POST",
            dataType:'JSON',
            success: function(dataResponse,responseText,response,statusText){

                var maquinas = dataResponse;

                $("#VentanaTitulo").html(maquinas[5]['Nombre']);
                $("#DesMaqu").html(maquinas[5]['Descripcion']);
            }
        });

    });

    $("#8").click(function(){

        $.ajax({
            url: "consCatalogo.php",
            method: "POST",
            dataType:'JSON',
            success: function(dataResponse,responseText,response,statusText){

                var maquinas = dataResponse;

                $("#VentanaTitulo").html(maquinas[6]['Nombre']);
                $("#DesMaqu").html(maquinas[6]['Descripcion']);
            }
        });

    });

    $("#9").click(function(){

        $.ajax({
            url: "consCatalogo.php",
            method: "POST",
            dataType:'JSON',
            success: function(dataResponse,responseText,response,statusText){

                var maquinas = dataResponse;

                $("#VentanaTitulo").html(maquinas[7]['Nombre']);
                $("#DesMaqu").html(maquinas[7]['Descripcion']);
            }
        });

    });
       



});