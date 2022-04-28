<?php

include("conexion.php");

$sql="SELECT r.IDRese, r.LugEntr, r.MonOrde, r.MetPago, c.FecEntr FROM reservas r INNER JOIN carrito c WHERE r.IDCar = c.IDCar";

$reservas=array();
$consulta=mysqli_query($conexion,$sql);

while($reservas=mysqli_fetch_array($consulta)){

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
                <table class='table table-sm' id='table'>
                    <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Lugar Entrega</th>
                        <th scope='col'>Día Entrega</th>
                        <th scope='col'>Monto</th>
                        <th scope='col'>Método de Pago</th>
                        <th scope='col'>Cancelar Reserva</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>".$reservas["IDRese"]."</th>
                        <td>".$reservas["LugEntr"]."</td>
                        <td>".$reservas["FecEntr"]."</td>
                        <td>".$reservas["MonOrde"]."</td>
                        <td>".$reservas["MetPago"]."</td>
                        <td>
                        <button type='button' class='fa fa-minus-circle' aria-hidden='true' onclick='delete_reser(".$reservas["IDRese"].");'></button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
    ";

}


?>

