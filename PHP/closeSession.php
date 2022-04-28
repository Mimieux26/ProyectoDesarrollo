<?php

//CERRAR SESION

include("conexion.php");
session_start();

$_SESSION = array();

echo session_destroy();

?>