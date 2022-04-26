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
$Contrasena=$json_obj->{"Contrasena"};

$sql="INSERT INTO usuarios (Cedula,TipIden,IDRol,Nombre,PriApel,SegApel,Telefono,Email,Contrasena) 
          VALUES('$Cedula','$TipIden','$IDRol','$Nombre','$PriApel','$SegApel','$Telefono','$Email','$Contrasena')";




echo mysqli_query($conexion,$sql);


/// Prueguntar por que no sirvio asi la mierda///
/*$sql="INSERT INTO usuarios (Cedula,TipIden,IDRol,Nombre,PriApel,SegApel,Telefono,Email,Contrasena) 
          VALUES('".$json_obj->{"Cedula"}."','".$json_obj->{"TipIden"}."','".$json_obj->{"IDRol"}."',
                '".$json_obj->{"Nombre"}."','".$json_obj->{"PriApel"}."','".$json_obj->{"SegApel"}."',
                '".$json_obj->{"SegApel"}."','".$json_obj->{"Telefono"}."','".$json_obj->{"Email"}."',
                '".$json_obj->{"Contrasena"}."'".")";*/










    

?>