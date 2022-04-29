<?php
include("conexion.php");

$sql="SELECT * FROM comentarios";

$usuarios=array();
$consulta=mysqli_query($conexion,$sql);

while($comentarios=mysqli_fetch_array($consulta)){


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
                        <th scope='col'># de reservacion</th>
                        <th scope='col'>Descripcion</th>
                        <th scope='col'>Cedula</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>".$comentarios["idComen"]."</td> 
                        <td><textarea disabled>".$comentarios["Descripcion"]."</textarea></td> 
                        <td>".$comentarios["Cedula"]."</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
    ";

}







?>