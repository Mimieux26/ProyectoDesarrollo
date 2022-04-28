<?php
include("conexion.php");

$obj=$_REQUEST["objJSON"];
$json_obj=json_decode($obj);

$nombreMaqui=$json_obj->{"nombreMaqui"};
$descMaqui=$json_obj->{"descMaqui"};
$precioMaqui=$json_obj->{"precioMaqui"};
$estadoMaqui=$json_obj->{"estadoMaqui"};
$idArt=$json_obj->{"idArt"};
$urlMaqui=$json_obj->{"urlMaqui"};

$sql="UPDATE maquinaria SET Nombre='$nombreMaqui',Descripcion='$descMaqui',Precio='$precioMaqui',Estado='$estadoMaqui', UrlMaqui='$urlMaqui'
WHERE IDArt=".$idArt;

echo mysqli_query($conexion,$sql);        






?>