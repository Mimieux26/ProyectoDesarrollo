<?php
include("conexion.php");

$select;
$arraySelect;

$id_maquina=$_REQUEST["idMaquina"];

$sql="SELECT * FROM maquinaria WHERE IDArti=".$id_maquina;

$select=mysqli_query($conexion,$sql);

$arraySelect=mysqli_fetch_assoc($select);

echo json_encode($arraySelect);




?>