<?php
include("conexion.php");

$cedulaIng=$_REQUEST["cedulaIng"];


$sql="SELECT Cedula, Contrasena FROM usuarios WHERE Cedula=".$cedulaIng;
mysqli_query($conexion,$sql);

    

?>