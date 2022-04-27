$(document).ready(function(){
    $("#btnActualizar").hide();
    $("#btnRegistrar").click(function(){
        var nombreMaqui=$("#nombreMaqui").val();
        if(nombreMaqui==""){
            if($("#nombreMaqui").hasClass('green-alert')==true){
                $("#nombreMaqui").removeClass('green-alert');


            }
            $("#nombreMaqui").addClass("red-alert");
            $("#span-nomMaqui").text("Debe ingresar un nombre");
            return false;

        }
        else{
            if($("#nombreMaqui").hasClass('red-alert')==true){
                $("#nombreMaqui").removeClass('red-alert');

            }
            $("#nombreMaqui").addClass("green-alert");
            $("#span-nomMaqui").text("Listo");

        }

        var descMaqui=$("#descMaqui").val();
        if(descMaqui==""|| descMaqui.length>100){
            if($("#descMaqui").hasClass('green-alert')==true){
                $("#descMaqui").removeClass('green-alert');


            }
            $("#descMaqui").addClass("red-alert");
            $("#span-descM").text("Debe ingresar una descripcion");
            return false;

        }
        else{
            if($("#descMaqui").hasClass('red-alert')==true){
                $("#descMaqui").removeClass('red-alert');

            }
            $("#descMaqui").addClass("green-alert");
            $("#span-descM").text("Listo");

        }


        var precioMaqui=$("#precioMaqui").val();
        if(precioMaqui==""|| isNaN(precioMaqui)){
            if($("#precioMaqui").hasClass('green-alert')==true){
                $("#precioMaqui").removeClass('green-alert');


            }
            $("#precioMaqui").addClass("red-alert");
            $("#span-precioM").text("Debe ingresar un precio valido");
            return false;

        }
        else{
            if($("#precioMaqui").hasClass('red-alert')==true){
                $("#precioMaqui").removeClass('red-alert');

            }
            $("#precioMaqui").addClass("green-alert");
            $("#span-precioM").text("Listo");

        }
        var estadoMaqui=$("#estadoMaqui").val();
        if(estadoMaqui==0){
            if($("#estadoMaqui").hasClass('green-alert')==true){
                $("#estadoMaqui").removeClass('green-alert');


            }
            $("#estadoMaqui").addClass("red-alert");
            $("#span-estadoM").text("Debe seleccionar el estado");
            return false;

        }
        else{
            if($("#estadoMaqui").hasClass('red-alert')==true){
                $("#estadoMaqui").removeClass('red-alert');

            }
            $("#estadoMaqui").addClass("green-alert");
            $("#span-estadoM").text("Listo");

        }

        var machineJSON={
            "nombreMaqui": nombreMaqui,
            "descMaqui": descMaqui,
            "precioMaqui" : precioMaqui,
            "estadoMaqui": estadoMaqui

        };

        $.ajax({
            url: "../PHP/insertMachine.php",
            method: "POST",
            data:{objJSON: JSON.stringify(machineJSON)},
            dataType:'JSON',
            success: function(dataResponse,responseText,response,statusText){

                if(dataResponse==1){
                alert("Se ha registrado con exito");
                
            }
            else{
                alert("Ha ocurrido un error");
            }

            }
    
        });

        








    });

    $("#btnActualizar").click(function(){
        var idArt=$("#idArt").val();
        var nombreMaqui=$("#nombreMaqui").val();
        if(nombreMaqui==""){
            if($("#nombreMaqui").hasClass('green-alert')==true){
                $("#nombreMaqui").removeClass('green-alert');


            }
            $("#nombreMaqui").addClass("red-alert");
            $("#span-nomMaqui").text("Debe ingresar un nombre");
            return false;

        }
        else{
            if($("#nombreMaqui").hasClass('red-alert')==true){
                $("#nombreMaqui").removeClass('red-alert');

            }
            $("#nombreMaqui").addClass("green-alert");
            $("#span-nomMaqui").text("Listo");

        }

        var descMaqui=$("#descMaqui").val();
        if(descMaqui==""|| descMaqui.length>100){
            if($("#descMaqui").hasClass('green-alert')==true){
                $("#descMaqui").removeClass('green-alert');


            }
            $("#descMaqui").addClass("red-alert");
            $("#span-descM").text("Debe ingresar una descripcion");
            return false;

        }
        else{
            if($("#descMaqui").hasClass('red-alert')==true){
                $("#descMaqui").removeClass('red-alert');

            }
            $("#descMaqui").addClass("green-alert");
            $("#span-descM").text("Listo");

        }


        var precioMaqui=$("#precioMaqui").val();
        if(precioMaqui==""|| isNaN(precioMaqui)){
            if($("#precioMaqui").hasClass('green-alert')==true){
                $("#precioMaqui").removeClass('green-alert');


            }
            $("#precioMaqui").addClass("red-alert");
            $("#span-precioM").text("Debe ingresar un precio valido");
            return false;

        }
        else{
            if($("#precioMaqui").hasClass('red-alert')==true){
                $("#precioMaqui").removeClass('red-alert');

            }
            $("#precioMaqui").addClass("green-alert");
            $("#span-precioM").text("Listo");

        }
        var estadoMaqui=$("#estadoMaqui").val();
        if(estadoMaqui==0){
            if($("#estadoMaqui").hasClass('green-alert')==true){
                $("#estadoMaqui").removeClass('green-alert');


            }
            $("#estadoMaqui").addClass("red-alert");
            $("#span-estadoM").text("Debe seleccionar el estado");
            return false;

        }
        else{
            if($("#estadoMaqui").hasClass('red-alert')==true){
                $("#estadoMaqui").removeClass('red-alert');

            }
            $("#estadoMaqui").addClass("green-alert");
            $("#span-estadoM").text("Listo");

        }

        var updateMachineJSON={
            "idArt": idArt,
            "nombreMaqui": nombreMaqui,
            "descMaqui": descMaqui,
            "precioMaqui" : precioMaqui,
            "estadoMaqui": estadoMaqui

        };

        $.ajax({
            url: "../PHP/updateMachine.php",
            method: "POST",
            data:{objJSON: JSON.stringify(updateMachineJSON)},
            dataType:'JSON',
            success: function(dataResponse,responseText,response,statusText){

                if(dataResponse==1){
                alert("Se ha registrado con exito");
                
            }
            else{
                alert("Ha ocurrido un error");
            }

            }
    
        });

        








    });

    $.ajax({
        url: "../PHP/consultMachine.php",
        method: "POST",
        success: function(dataResponse,responseText,response,statusText){
            
            $('#tablaMaquina').html(dataResponse);
        }

    });
    





    $("input[type=text]").focus(function(){
        // activamos la viñeta
        $(this).next("span").css({display:"inline"});
    });

    $("input[type=text]").focusout(function(){
        // escondemos la viñeta
        $(".mensaje").hide();
    });
    $("textarea").focus(function(){
        // activamos la viñeta
        $(this).next("span").css({display:"inline"});
    });

    $("textarea").focusout(function(){
        // escondemos la viñeta
        $(".mensaje").hide();
    });


    $("select").focus(function(){
        // activamos la viñeta
        $(this).next("span").css({display:"inline"});
    });

    $("select").focusout(function(){
        // escondemos la viñeta
        $(".mensaje").hide();
    });



});

function show_machine(valor){
    $("#btnActualizar").show();
    $("#btnRegistrar").hide();

    $.ajax({
        url: "../PHP/selectMachine.php",
        data: {idMaquina: valor},
        method: "POST",
        dataType:'JSON',
        success: function(dataResponse,responseText,response,statusText){
            
            var data_machine=dataResponse;

            
            $("#idMaqui").val(data_machine["IDArti"]);
            $("#nombreMaqui").val(data_machine["Nombre"]);
            $("#descMaqui").val(data_machine["Descripcion"]);
            $("#precioMaqui").val(data_machine["Precio"]);
            $("#estadoMaqui").val(data_machine["Estado"]);
        }

    });

}

function delete_machine(valor){
    ShowDialog(valor);


}

function ShowDialog(ingreso) {
    $('#spanMessage').html('¿Está seguro(a) de eliminar el articulo?');
    $("#dialogConfirm").dialog({
        dialogClass: "alert",
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        title: 'Mensaje de confirmacion',
        buttons: {
            'Aceptar': function () {

                $.ajax({
                    url: "../PHP/deleteMachine.php",
                    data: {idMaquina: ingreso},
                    method: "POST",
                    dataType:'JSON',
                    success: function(dataResponse,responseText,response,statusText){
                        if(dataResponse==1){
                            alert("Se ha eliminado con exito con exito");
                            
                        }
                        else{
                            alert("Ha ocurrido un error");
                        }
                        
  
                    }
            
                });







                $(this).dialog("close");
                location.reload();
            },
                'Cancelar': function () {
                $(this).dialog("close");
            }
        }
    });
}