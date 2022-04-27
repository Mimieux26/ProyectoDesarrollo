<?php
include("conexion.php");
$idArti=$_REQUEST["idMaquina"];

$sql="DELETE FROM maquinaria WHERE IDArti=".$idArti;

echo mysqli_query($conexion,$sql);




?>