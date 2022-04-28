<?php
include("conexion.php");

$IDArt=$_REQUEST["IdArt"];
$CantidadMaqui=$_REQUEST["cantA"];
$precioMaqui=$_REQUEST["precioM"];
$CanDias=$_REQUEST["CanDias"];


session_start();

$Cedula=$_SESSION['sessionUser']['usuario'];



$sql="INSERT INTO carrito (IDArti, Cedula, CanArt, CanDias) 
          VALUES('$IDArt','$Cedula','$CantidadMaqui', '$CanDias')";


echo mysqli_query($conexion,$sql);


?>
