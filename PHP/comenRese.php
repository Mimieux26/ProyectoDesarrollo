<?php

include("conexion.php");

$sql="SELECT r.IDRese, r.LugEntr, r.MonOrde, r.MetPago, r.Calificacion, r.Comentario FROM reservas r INNER JOIN carrito c WHERE r.IDCar = c.IDCar";

$reservas=array();
$consulta=mysqli_query($conexion,$sql);

while($reservas=mysqli_fetch_array($consulta)){

    echo "<div class='card' style='width: 18rem;'>
                <div class='card-body' id='body-card'>
                    <h5 class='card-title'>".$reservas["IDRese"]."</h5>
                    <textarea name='coment' id='".$reservas["Comentario"]."' cols='30' rows='10'></textarea>
                    <div class='rating'> 
                        <input type='radio' name='rating' value='5' id='5'><label for='5'>☆</label> 
                        <input type='radio' name='rating' value='4' id='4'><label for='4'>☆</label> 
                        <input type='radio' name='rating' value='3' id='3'><label for='3'>☆</label> 
                        <input type='radio' name='rating' value='2' id='2'><label for='2'>☆</label> 
                        <input type='radio' name='rating' value='1' id='1'><label for='1'>☆</label> 
                    </div>
                    <button type='button' class='btn btn-primary'  id='".$reservas["IDRese"]."'> Enviar </button>
                
                </div>
            </div>

    ";

}


?>
