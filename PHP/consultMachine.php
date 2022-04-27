<?php
include("conexion.php");

$sql="SELECT * FROM maquinaria";

$maquinas=array();
$consulta=mysqli_query($conexion,$sql);

echo " <tr>
            <th>Id de articulo</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Estado</th>
      </tr>";

while($maquinas=mysqli_fetch_array($consulta)){

    echo "<tr>";
    echo "<td>".$maquinas["IDArti"]."</td>";
    echo "<td>".$maquinas["Nombre"]."</td>";
    echo "<td>".$maquinas["Descripcion"]."</td>";
    echo "<td>".$maquinas["Precio"]."</td>";
    echo "<td>".$maquinas["Estado"]."</td>";
    echo "<td>
            <button type='button' class='btn btn-warning' onclick='show_machine(".$maquinas["IDArti"].");'>Editar</button>
            <button type='button' class='btn btn-danger' onclick='delete_machine(".$maquinas["IDArti"].");'>Eliminar</button>
          </td>";     
    echo "</tr>";


}







?>