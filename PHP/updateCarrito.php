<?php
include("conexion.php");

$obj=$_REQUEST["objCarJSON"];
$car_obj=json_decode($obj);

$MonTota=$car_obj->{"MonTota"};
$IDCar=$car_obj->{"IDCar"};
$IDArti=$car_obj->{"IDArti"};



$sql="UPDATE carrito SET MonTota='$MonTota' WHERE IDArti='$IDArti' AND IDCar='$IDCar'";



echo mysqli_query($conexion,$sql);        






?>