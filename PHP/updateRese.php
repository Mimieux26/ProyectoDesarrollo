<?php
include("conexion.php");




$comentario = $_REQUEST["comentario"];
$IDRese = $_REQUEST["IDRese"];
$calificacion = $_REQUEST["calificacion"];



$sql="UPDATE reservas SET Comentario='$comentario', Calificacion='$calificacion' WHERE IDRese='$IDRese'";



echo mysqli_query($conexion,$sql);        






?>