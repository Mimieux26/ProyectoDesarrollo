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









    });


    $("input[type=text]").focus(function(){
        // activamos la viñeta
        $(this).next("span").css({display:"inline"});
    });

    $("input[type=text]").focusout(function(){
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