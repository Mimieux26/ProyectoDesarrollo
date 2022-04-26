$(document).ready(function(){
    $("#submitLogin").click(function(event){
        event.preventDefault();
        
        var Cedula=$("#Cedula").val();
        if(Cedula==""){
            if($("#Cedula").hasClass('green-alert')==true){
                $("#Cedula").removeClass('green-alert');


            }
            $("#Cedula").addClass("red-alert");
            $("#span-cedula").text("Debe ingresar un tipo de identificación valido");
            return false;

        }
        else{
            if($("#Cedula").hasClass('red-alert')==true){
                $("#Cedula").removeClass('red-alert');

            }
            $("#Cedula").addClass("green-alert");
            $("#span-cedula").text("Listo");

        }
        var Contrasena=$("#Contrasena").val();
        if(Contrasena==""){
            if($("#Contrasena").hasClass('green-alert')==true){
                $("#Contrasena").removeClass('green-alert');


            }
            $("#Contrasena").addClass("red-alert");
            $("#span-contrasena").text("Debe ingresar una contraseña");
            return false;

        }
        else{
            if($("#Contrasena").hasClass('red-alert')==true){
                $("#Contrasena").removeClass('red-alert');

            }
            $("#Contrasena").addClass("green-alert");
            $("#span-contrasena").text("Listo");

        }

        

        $.ajax({
            url: "../PHP/consultIndex.php",
            method: "POST",
            data:{cedulaIng: Cedula,contrasenaIng: Contrasena},
            dataType:'JSON',
            success: function(dataResponse,responseText,response,statusText){
                console.log(dataResponse);
                
                if(dataResponse==null){
                    alert("El usuario no existe o la contraseña es incorrecta");
                    return false;
                }else{
                    
                    location.replace("../HTML/mainMenu.html");//-----> Aca va la pagina del main//
                }

            
                

    
            }
    
        });

       

        




    });

    $("input[type=text]").focus(function(){
        // activamos la viñeta
        $(this).next("span").css({display:"inline"});
    });

    $("input[type=text]").focusout(function(){
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








});