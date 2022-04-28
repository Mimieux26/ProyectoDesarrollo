<?php
include("conexion.php");

$idReser=$_REQUEST["IDRese"];
$estado=$_REQUEST["estadoRese"];

$sql="UPDATE reservas SET Estado='$estado' WHERE IDRese='$idReser'";



echo mysqli_query($conexion,$sql);        






?>