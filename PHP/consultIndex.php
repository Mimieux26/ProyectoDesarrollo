<?php
include("conexion.php");

$cedulaIng=$_REQUEST["cedulaIng"];
$contrasenaIng=$_REQUEST["contrasenaIng"];

$sql="SELECT Cedula, Contrasena, IDRol FROM usuarios WHERE Cedula="."'".$cedulaIng."'"." AND Contrasena="."'".$contrasenaIng."'";
$usuario=mysqli_fetch_assoc(mysqli_query($conexion,$sql));

if($usuario!=null){
    session_start();

    $_SESSION['sessionUser']['usuario']=$cedulaIng;
    $_SESSION['sessionUser']['idRol']=$usuario['IDRol'];
}

 echo json_encode($usuario);


    

?>