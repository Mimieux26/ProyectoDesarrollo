<?php
include("conexion.php");


//Consulta para Printear
$sql="SELECT a.Nombre, a.IDArti, a.Precio, c.IDCar, CanArt, c.CanDias FROM carrito c INNER JOIN maquinaria a WHERE c.IDArti = a.IDArti";


$carrito=array();
$consulta=mysqli_query($conexion,$sql);


while($carrito=mysqli_fetch_array($consulta)){
    echo "<tr>";
    echo "<input type='hidden' id='IDArti' value =".$carrito["IDArti"]."></input>";
    echo "<input type='hidden' id='IDCar' value =".$carrito["IDCar"]."></input>";
    echo "<td>".$carrito["Nombre"]."</td>";
    echo "<td>".$carrito["Precio"]."</td>";
    echo "<td>".$carrito["CanArt"]."</td>";
    echo "<td>".$carrito["CanDias"]."</td>";

    //Operacion
    $MonTota = $carrito["Precio"] *  $carrito["CanArt"] * $carrito["CanDias"];

    echo "<td>".$MonTota."</td>";
    echo "<input type='hidden' id='MonTota' value ='$MonTota'></input>";

    echo "<td>
        <button type='button' class='fa fa-minus-circle' aria-hidden='true' onclick='delete_car(".$carrito["IDCar"].");'></button>
    </td>";
  
    echo "</tr>";

}






?>