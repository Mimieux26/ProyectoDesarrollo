<?php
include("conexion.php");

$cedulaIng=$_REQUEST["cedulaIng"];


$sql="SELECT Cedula, Contrasena FROM usuarios WHERE Cedula=".$cedulaIng;
$usuario=mysqli_fetch_assoc(mysqli_query($conexion,$sql));

 echo json_encode($usuario);


    

?>