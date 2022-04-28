<?php
include("conexion.php");

$obj=$_REQUEST["objCarJSON"];
$car_obj=json_decode($obj);

$IDArti=$car_obj->{"IDArti"};
$IDCar=$car_obj->{"IDCar"};
$FecEntr=$car_obj->{"FecEntr"};
$MonTota=$car_obj->{"MonTota"};


$sql="UPDATE carrito SET FecEntr='$FecEntr', MonTota='$MonTota' WHERE IDArti='$IDArti' AND IDCar='$IDCar'";



echo mysqli_query($conexion,$sql);        






?>