<?php
include("conexion.php");

$IDArt=$_REQUEST["IdArt"];
$CantidadMaqui=$_REQUEST["cantA"];
$precioMaqui=$_REQUEST["precioM"];

session_start();

$Cedula=$_SESSION['sessionUser']['usuario'];



$sql="INSERT INTO carrito (IDArti, Cedula, CanArt) 
          VALUES('$IDArt','$Cedula','$CantidadMaqui')";


echo mysqli_query($conexion,$sql);


?>
