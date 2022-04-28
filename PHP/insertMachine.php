<?php
include("conexion.php");

$obj=$_REQUEST["objJSON"];
$json_obj=json_decode($obj);

$nombreMaqui=$json_obj->{"nombreMaqui"};
$descMaqui=$json_obj->{"descMaqui"};
$precioMaqui=$json_obj->{"precioMaqui"};
$estadoMaqui=$json_obj->{"estadoMaqui"};
$urlMaqui=$json_obj->{"urlMaqui"};


$sql="INSERT INTO maquinaria (Nombre,Descripcion,Precio,Estado, UrlMaqui) 
          VALUES('$nombreMaqui','$descMaqui','$precioMaqui','$estadoMaqui', '$urlMaqui')";




echo mysqli_query($conexion,$sql);


?>