<?php
include("conexion.php");

$IDArti = $_REQUEST["IDArti"]

$sql="SELECT Nombre, Descripcion, Precio, Estado, URL FROM maquinaria WHERE IDArti =".$IDArti;

$consulta=mysqli_query($conexion,$sql);

$carrito=array();
while($carrito=mysqli_fetch_array($consulta)){

    echo "<tr>";
    echo "<td>".$carrito["Nombre"]."</td>";
    echo "<td>".$carrito["Precio"]."</td>";
    echo "<td>".$carrito["Descripcion"]."</td>";
    echo "<td>".$carrito["Estado"]."</td>";
    echo "<td>
            <button type='button' class='btn btn-danger' onclick='delete_machine(".$carrito["IDArti"].");'>Eliminar</button>
          </td>";     
    echo "</tr>";


}


//INSERTAR A TABLA CARRITO

?>

