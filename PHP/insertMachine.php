<?php
include("conexion.php");

$obj=$_REQUEST["objJSON"];
$json_obj=json_decode($obj);

$nombreMaqui=$json_obj->{"nombreMaqui"};
$descMaqui=$json_obj->{"descMaqui"};
$precioMaqui=$json_obj->{"precioMaqui"};
$estadoMaqui=$json_obj->{"estadoMaqui"};


$sql="INSERT INTO maquinaria (Nombre,Descripcion,Precio,Estado) 
          VALUES('$nombreMaqui','$descMaqui','$precioMaqui','$estadoMaqui')";




echo mysqli_query($conexion,$sql);


?>