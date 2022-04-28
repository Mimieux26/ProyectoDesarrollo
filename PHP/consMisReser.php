<?php

include("conexion.php");

$sql="SELECT r.IDRese, r.LugEntr, r.MonOrde, r.MetPago, r.FecEntr, r.Estado FROM reservas r INNER JOIN carrito c WHERE r.IDCar = c.IDCar";

$reservas=array();
$consulta=mysqli_query($conexion,$sql);

session_start();

$rol=$_SESSION['sessionUser']['idRol'];

$opciones="";


while($reservas=mysqli_fetch_array($consulta)){

    if($rol==1){
        $opciones="
        
        <td>".$reservas["Estado"]."</td>  
        <td>
        <button type='button' class='fa fa-minus-circle' aria-hidden='true' onclick='delete_reser(".$reservas["IDRese"].");'></button>
        </td>";
    }
    else{
            $opciones="
                       <td>".$reservas["Estado"]."</td>
                       <td>
                        <select id='selectEstado'>
                        <option value='Sin Actividad'>Cambiar estado</option>
                        <option value='Procesando'>Procesando</option>
                        <option value='En camino'>En camino</option>
                        <option value='Entregado'>Entregado</option>
                        </select>
                       </td>
                    <td>
                    <button type='button' class='fa fa-minus-circle' aria-hidden='true' onclick='delete_reser(".$reservas["IDRese"].");'></button>
                    <button type='button' class='fa fa-check' aria-hidden='true' onclick='process_reser(".$reservas["IDRese"].");'></button>
                    </td>";
    
    }

    echo "

        <div class='card-header' id='headingOne'>
            <h5 class='mb-0'>
            <button class='btn btn-link' data-toggle='collapse' data-target='#collapse' aria-expanded='true' aria-controls='collapseOne'>
                Reservación
            </button>
            </h5>
        </div>
        <div id='collapse' class='collapse show' aria-labelledby='headingOne' data-parent='#accordion'>
                <div class='card-body'>
                <p id'pIdRes' hidden>".$reservas["IDRese"]."</p>
                <table class='table table-sm' id='table'>
                    <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Lugar Entrega</th>
                        <th scope='col'>Día Entrega</th>
                        <th scope='col'>Monto</th>
                        <th scope='col'>Método de Pago</th>
                        <th scope='col'>Estado</th>
                        <th scope='col'>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>".$reservas["IDRese"]."</th>
                        <td>".$reservas["LugEntr"]."</td> 
                        <td>".$reservas["FecEntr"]."</td> 
                        <td>".$reservas["MonOrde"]."</td>
                        <td>".$reservas["MetPago"]."</td>
                        ".$opciones."
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
    ";

}


?>

