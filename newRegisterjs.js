$(document).ready(function(){
    $("#btnRegistrar").click(function(){
        var TipIden=$("#TipIden").val();
        if(TipIden==0){
            if($("#TipIden").hasClass('green-alert')==true){
                $("#TipIden").removeClass('green-alert');


            }
            $("#TipIden").addClass("red-alert");
            $("#span-tip").text("Debe seleccionar un tipo de identificación");
            return false;

        }
        else{
            if($("#TipIden").hasClass('red-alert')==true){
                $("#TipIden").removeClass('red-alert');

            }
            $("#TipIden").addClass("green-alert");
            $("#span-tip").text("Listo");

        }

        var Cedula=$("#Cedula").val();
        if(Cedula==""){
            if($("#Cedula").hasClass('green-alert')==true){
                $("#Cedula").removeClass('green-alert');


            }
            $("#Cedula").addClass("red-alert");
            $("#span-cedula").text("Debe ingresar una cédula");
            return false;

        }
        else{
            if($("#Cedula").hasClass('red-alert')==true){
                $("#Cedula").removeClass('red-alert');

            }
            $("#Cedula").addClass("green-alert");
            $("#span-cedula").text("Listo");

        }

        if(TipIden==1){
            if(Cedula.length!=9){
                if($("#Cedula").hasClass('green-alert')==true){
                    $("#Cedula").removeClass('green-alert');
    
    
                }
                $("#Cedula").addClass("red-alert");
                $("#span-cedula").text("Debe ingresar una cédula valida (9 dígitos)");
                return false;

            }
            else{
                if($("#Cedula").hasClass('red-alert')==true){
                    $("#Cedula").removeClass('red-alert');
    
                }
                $("#Cedula").addClass("green-alert");
                $("#span-cedula").text("Listo");
            }

        }else if(TipIden==2){
            if(Cedula.length!=12){
                if($("#Cedula").hasClass('green-alert')==true){
                    $("#Cedula").removeClass('green-alert');
    
    
                }
                $("#Cedula").addClass("red-alert");
                $("#span-cedula").text("Debe ingresar una cédula valida (12 dígitos)");
                return false;

            }
            else{
                if($("#Cedula").hasClass('red-alert')==true){
                    $("#Cedula").removeClass('red-alert');
    
                }
                $("#Cedula").addClass("green-alert");
                $("#span-cedula").text("Listo");

            }


        }

        var Nombre=$("#Nombre").val();
        if(Nombre==""){
            if($("#Nombre").hasClass('green-alert')==true){
                $("#Nombre").removeClass('green-alert');


            }
            $("#Nombre").addClass("red-alert");
            $("#span-nombre").text("Debe añadir un nombre");
            return false;
            
        }else{
            if($("#Nombre").hasClass('red-alert')==true){
                $("#Nombre").removeClass('red-alert');

            }
            $("#Nombre").addClass("green-alert");
            $("#span-nombre").text("Listo");

        }

        var PriApel=$("#PriApel").val();
        if(PriApel==""){
            if($("#PriApel").hasClass('green-alert')==true){
                $("#PriApel").removeClass('green-alert');


            }
            $("#PriApel").addClass("red-alert");
            $("#span-pApel").text("Debe añadir su primer apellido");
            return false;
            
        }else{
            if($("#PriApel").hasClass('red-alert')==true){
                $("#PriApel").removeClass('red-alert');

            }
            $("#PriApel").addClass("green-alert");
            $("#span-pAPel").text("Listo");

        }

        var SegApel=$("#SegApel").val();
        if(SegApel==""){
            if($("#SegApel").hasClass('green-alert')==true){
                $("#SegApel").removeClass('green-alert');


            }
            $("#SegApel").addClass("red-alert");
            $("#span-sApel").text("Debe añadir su segundo apellido");
            return false;
            
        }else{
            if($("#SegApel").hasClass('red-alert')==true){
                $("#SegApel").removeClass('red-alert');

            }
            $("#SegApel").addClass("green-alert");
            $("#span-sAPel").text("Listo");

        }

        var Telefono=$("#Telefono").val();
        if(Telefono==""|| Telefono.length!=8 || isNaN(Telefono)){
            if($("#Telefono").hasClass('green-alert')==true){
                $("#Telefono").removeClass('green-alert');


            }
            $("#Telefono").addClass("red-alert");
            $("#span-telefono").text("Debe añadir un número de telefono valido");
            return false;
            
        }else{
            if($("#Telefono").hasClass('red-alert')==true){
                $("#Telefono").removeClass('red-alert');

            }
            $("#Telefono").addClass("green-alert");
            $("#span-telefono").text("Listo");

        }

        var Email=$("#Email").val();
        if(Email.indexOf('@', 0) == -1 || Email.indexOf('.', 0) == -1){
            if($("#Email").hasClass('green-alert')==true){
                $("#Email").removeClass('green-alert');


            }
            $("#Email").addClass("red-alert");
            $("#span-email").text("Debe incluir un correo");
            return false;
        }
        else{
            if($("#Email").hasClass('red-alert')==true){
                $("#Email").removeClass('red-alert');

            }
            $("#Email").addClass("green-alert");
            $("#span-email").text("Listo");

        }

        var Contrasena=$("#Contrasena").val();
        var re = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var comprobacion=re.test(Contrasena);
        

        if(Contrasena==""|| comprobacion==false){
            if($("#Contrasena").hasClass('green-alert')==true){
                $("#Contrasena").removeClass('green-alert');


            }
            $("#Contrasena").addClass("red-alert");
            $("#span-cont").text("Debe añadir una contraseña valida");
            return false;
            
        }else{
            if($("#Contrasena").hasClass('red-alert')==true){
                $("#Contrasena").removeClass('red-alert');

            }
            $("#Contrasena").addClass("green-alert");
            $("#span-cont").text("Listo");

        }

        var ConCont=$("#ConCont").val();
        if(ConCont==""|| ConCont!=Contrasena){
            if($("#ConCont").hasClass('green-alert')==true){
                $("#ConCont").removeClass('green-alert');


            }
            $("#ConCont").addClass("red-alert");
            $("#span-conCont").text("La contraseña no coincide");
            return false;
            
        }else{
            if($("#ConCont").hasClass('red-alert')==true){
                $("#ConCont").removeClass('red-alert');

            }
            $("#ConCont").addClass("green-alert");
            $("#span-conCont").text("Listo");

        }
        var registerJSON={
            "TipIden": TipIden,
            "Cedula": Cedula,
            "IDRol" : "1",//Hay que ver que se hace con el id rol, ya que dependiendo del mismo, puede tener acceso o no a ciertas cosas//
            "Nombre": Nombre,
            "PriApel": PriApel,
            "SegApel": SegApel,
            "Telefono": Telefono,
            "Email": Email,
            "Contrasena": Contrasena

        };

        $.ajax({
            url: "insertRegister.php",
            method: "POST",
            data:{objJSON: JSON.stringify(registerJSON)},
            dataType:'JSON',
            success: function(dataResponse,responseText,response,statusText){

                if(dataResponse==1){
                alert("Se ha registrado con exito");
                location.replace("index.html");
            }
            else{
                alert("Ha ocurrido un error");
            }

 
                

    
            }
    
        });

        //Termina el Registro usuario normal//

    });

    ///Inicia la validacion del update///

    $("#btnActualizar").click(function(){
        var TipIden=$("#TipIden").val();
        if(TipIden==0){
            if($("#TipIden").hasClass('green-alert')==true){
                $("#TipIden").removeClass('green-alert');


            }
            $("#TipIden").addClass("red-alert");
            $("#span-tip").text("Debe seleccionar un tipo de identificación");
            return false;

        }
        else{
            if($("#TipIden").hasClass('red-alert')==true){
                $("#TipIden").removeClass('red-alert');

            }
            $("#TipIden").addClass("green-alert");
            $("#span-tip").text("Listo");

        }

        var Cedula=$("#Cedula").val();
        if(Cedula==""){
            if($("#Cedula").hasClass('green-alert')==true){
                $("#Cedula").removeClass('green-alert');


            }
            $("#Cedula").addClass("red-alert");
            $("#span-cedula").text("Debe ingresar una cédula");
            return false;

        }
        else{
            if($("#Cedula").hasClass('red-alert')==true){
                $("#Cedula").removeClass('red-alert');

            }
            $("#Cedula").addClass("green-alert");
            $("#span-cedula").text("Listo");

        }

        if(TipIden==1){
            if(Cedula.length!=9){
                if($("#Cedula").hasClass('green-alert')==true){
                    $("#Cedula").removeClass('green-alert');
    
    
                }
                $("#Cedula").addClass("red-alert");
                $("#span-cedula").text("Debe ingresar una cédula valida (9 dígitos)");
                return false;

            }
            else{
                if($("#Cedula").hasClass('red-alert')==true){
                    $("#Cedula").removeClass('red-alert');
    
                }
                $("#Cedula").addClass("green-alert");
                $("#span-cedula").text("Listo");
            }

        }else if(TipIden==2){
            if(Cedula.length!=12){
                if($("#Cedula").hasClass('green-alert')==true){
                    $("#Cedula").removeClass('green-alert');
    
    
                }
                $("#Cedula").addClass("red-alert");
                $("#span-cedula").text("Debe ingresar una cédula valida (12 dígitos)");
                return false;

            }
            else{
                if($("#Cedula").hasClass('red-alert')==true){
                    $("#Cedula").removeClass('red-alert');
    
                }
                $("#Cedula").addClass("green-alert");
                $("#span-cedula").text("Listo");

            }


        }

        var IDRol=$("#IDRol").val();
        if(IDRol==0){
            if($("#IDRol").hasClass('green-alert')==true){
                $("#IDRol").removeClass('green-alert');


            }
            $("#IDRol").addClass("red-alert");
            $("#span-rol").text("Debe seleccionar un tipo de rol");
            return false;

        }
        else{
            if($("#IDRol").hasClass('red-alert')==true){
                $("#IDRol").removeClass('red-alert');

            }
            $("#IDRol").addClass("green-alert");
            $("#span-rol").text("Listo");

        }

        var Nombre=$("#Nombre").val();
        if(Nombre==""){
            if($("#Nombre").hasClass('green-alert')==true){
                $("#Nombre").removeClass('green-alert');


            }
            $("#Nombre").addClass("red-alert");
            $("#span-nombre").text("Debe añadir un nombre");
            return false;
            
        }else{
            if($("#Nombre").hasClass('red-alert')==true){
                $("#Nombre").removeClass('red-alert');

            }
            $("#Nombre").addClass("green-alert");
            $("#span-nombre").text("Listo");

        }

        var PriApel=$("#PriApel").val();
        if(PriApel==""){
            if($("#PriApel").hasClass('green-alert')==true){
                $("#PriApel").removeClass('green-alert');


            }
            $("#PriApel").addClass("red-alert");
            $("#span-pApel").text("Debe añadir su primer apellido");
            return false;
            
        }else{
            if($("#PriApel").hasClass('red-alert')==true){
                $("#PriApel").removeClass('red-alert');

            }
            $("#PriApel").addClass("green-alert");
            $("#span-pAPel").text("Listo");

        }

        var SegApel=$("#SegApel").val();
        if(SegApel==""){
            if($("#SegApel").hasClass('green-alert')==true){
                $("#SegApel").removeClass('green-alert');


            }
            $("#SegApel").addClass("red-alert");
            $("#span-sApel").text("Debe añadir su segundo apellido");
            return false;
            
        }else{
            if($("#SegApel").hasClass('red-alert')==true){
                $("#SegApel").removeClass('red-alert');

            }
            $("#SegApel").addClass("green-alert");
            $("#span-sAPel").text("Listo");

        }

        var Telefono=$("#Telefono").val();
        if(Telefono==""|| Telefono.length!=8 || isNaN(Telefono)){
            if($("#Telefono").hasClass('green-alert')==true){
                $("#Telefono").removeClass('green-alert');


            }
            $("#Telefono").addClass("red-alert");
            $("#span-telefono").text("Debe añadir un número de telefono valido");
            return false;
            
        }else{
            if($("#Telefono").hasClass('red-alert')==true){
                $("#Telefono").removeClass('red-alert');

            }
            $("#Telefono").addClass("green-alert");
            $("#span-telefono").text("Listo");

        }

        var Email=$("#Email").val();
        if(Email.indexOf('@', 0) == -1 || Email.indexOf('.', 0) == -1){
            if($("#Email").hasClass('green-alert')==true){
                $("#Email").removeClass('green-alert');


            }
            $("#Email").addClass("red-alert");
            $("#span-email").text("Debe incluir un correo");
            return false;
        }
        else{
            if($("#Email").hasClass('red-alert')==true){
                $("#Email").removeClass('red-alert');

            }
            $("#Email").addClass("green-alert");
            $("#span-email").text("Listo");

        }

        var updateRegisterJSON={
            "TipIden": TipIden,
            "Cedula": Cedula,
            "IDRol" : IDRol,
            "Nombre": Nombre,
            "PriApel": PriApel,
            "SegApel": SegApel,
            "Telefono": Telefono,
            "Email": Email,
            

        };

        $.ajax({
            url: "updateRegister.php",
            method: "POST",
            data:{objJSON: JSON.stringify(updateRegisterJSON)},
            dataType:'JSON',
            success: function(dataResponse,responseText,response,statusText){

                if(dataResponse==1){
                alert("Se ha actualizado con exito");
                location.reload();
            }
            else{
                alert("Ha ocurrido un error");
            }

 
                

    
            }
    
        });





    });







    var idRol;
    $.ajax({
        url: "mainMenuphp.php",
        method: "POST",
        success: function(dataResponse,responseText,response,statusText){
            
            idRol=parseInt(dataResponse);
            

            if(idRol!=2){
                $("#infoUser").hide();
                $("#divRol").hide();
                $("#btnActualizar").hide();
                
        
            }
            else{
                $("#btnRegistrar").hide();
                $("#divRol").show();
                $("#divContrasena").hide();
                $("#divConCont").hide();
                

                $.ajax({
                    url: "consultRegister.php",
                    method: "POST",
                    success: function(dataResponse,responseText,response,statusText){
                        
                        $('#tablaUsuarios').html(dataResponse);
                    }
            
                });
                
                
            }
        

            
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

    $("input[type=email]").focus(function(){
        // activamos la viñeta
        $(this).next("span").css({display:"inline"});
    });

    $("input[type=email]").focusout(function(){
        // escondemos la viñeta
        $(".mensaje").hide();
    });

    $("input[type=password]").focus(function(){
        // activamos la viñeta
        $(this).next("span").css({display:"inline"});
    });

    $("input[type=password]").focusout(function(){
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



function show_user(valor){

    $.ajax({
        url: "selectRegister.php",
        data: {Cedula: valor},
        method: "POST",
        dataType:'JSON',
        success: function(dataResponse,responseText,response,statusText){
            
            var data_user=dataResponse;

            
            $("#TipIden").val(data_user["TipIden"]);
            $("#Cedula").val(data_user["Cedula"]);
            $("#IDRol").val(data_user["IDRol"]);
            $("#Nombre").val(data_user["Nombre"]);
            $("#PriApel").val(data_user["PriApel"]);
            $("#SegApel").val(data_user["SegApel"]);
            $("#Telefono").val(data_user["Telefono"]);
            $("#Email").val(data_user["Email"]);
        }

    });

}
