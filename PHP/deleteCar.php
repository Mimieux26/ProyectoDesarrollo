<?php
include("conexion.php");
$IDCar=$_REQUEST["IDCar"];

$sql="DELETE FROM carrito WHERE IDCar=".$IDCar;

echo mysqli_query($conexion,$sql);




?>