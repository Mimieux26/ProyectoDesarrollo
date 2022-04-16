<?php
include("conexion.php");

$cedulaIng=$_REQUEST["cedulaIng"];
$contrasenaIng=$_REQUEST["contrasenaIng"];

$sql="SELECT Cedula, Contrasena FROM usuarios WHERE Cedula="."'".$cedulaIng."'"." AND Contrasena="."'".$contrasenaIng."'";
$usuario=mysqli_fetch_assoc(mysqli_query($conexion,$sql));

 echo json_encode($usuario);


    

?>