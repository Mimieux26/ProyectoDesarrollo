<?php
include("conexion.php");


$obj=$_REQUEST["objResJSON"];
$reser_obj=json_decode($obj);

$Cedula=$reser_obj->{"Cedula"};
$IDCar=$reser_obj->{"IDCar"};
$LugEntr=$reser_obj->{"LugEntr"};

$FecEntr=$reser_obj->{"FecEntr"};
$MonOrde=$reser_obj->{"MonOrde"};
$MetPago=$reser_obj->{"MetPago"};


session_start();

$Cedula=$_SESSION['sessionUser']['usuario'];



$sql="INSERT INTO reservas (Cedula, IDCar, LugEntr, FecEntr, MonOrde, MetPago) 
          VALUES('$Cedula','$IDCar', '$LugEntr', '$FecEntr','$MonOrde', '$MetPago' )";


echo mysqli_query($conexion,$sql);


?>
