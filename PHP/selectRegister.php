<?php
include("conexion.php");

$select;
$arraySelect;

$ced_user=$_REQUEST["Cedula"];

$sql2="SELECT Cedula, TipIden, IDRol, Nombre, PriApel, SegApel, Telefono, Email FROM usuarios WHERE Cedula=".$ced_user;

$select=mysqli_query($conexion,$sql2);

$arraySelect=mysqli_fetch_assoc($select);

echo json_encode($arraySelect);




?>