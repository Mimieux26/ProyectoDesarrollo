<?php
include("conexion.php");

$obj=$_REQUEST["objJSON"];
$json_obj=json_decode($obj);

$Cedula=$json_obj->{"Cedula"};
$TipIden=$json_obj->{"TipIden"};
$IDRol=$json_obj->{"IDRol"};
$Nombre=$json_obj->{"Nombre"};
$PriApel=$json_obj->{"PriApel"};
$SegApel=$json_obj->{"SegApel"};
$Telefono=$json_obj->{"Telefono"};
$Email=$json_obj->{"Email"};


$sql="UPDATE usuarios SET Cedula='$Cedula',TipIden='$TipIden',IDRol='$IDRol',Nombre='$Nombre',PriApel='$PriApel',
        SegApel='$SegApel',Telefono='$Telefono',Email='$Email' WHERE Cedula=".$Cedula;

echo mysqli_query($conexion,$sql);        






?>