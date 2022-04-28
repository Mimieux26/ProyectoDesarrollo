<?php
include("conexion.php");
$IDRese=$_REQUEST["IDRese"];

$sql="DELETE FROM reservas WHERE IDRese=".$IDRese;

echo mysqli_query($conexion,$sql);




?>