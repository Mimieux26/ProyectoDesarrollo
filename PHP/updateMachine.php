<?php
include("conexion.php");

$obj=$_REQUEST["objJSON"];
$json_obj=json_decode($obj);

$nombreMaqui=$json_obj->{"nombreMaqui"};
$descMaqui=$json_obj->{"descMaqui"};
$precioMaqui=$json_obj->{"precioMaqui"};
$estadoMaqui=$json_obj->{"estadoMaqui"};
$idArt=$json_obj->{"idArt"};

$sql="UPDATE maquinaria SET Nombre='$nombreMaqui',Descripcion='$descMaqui',Precio='$precioMaqui',Estado='$estadoMaqui'
 WHERE IDArt=".$idArt;

echo mysqli_query($conexion,$sql);        






?>