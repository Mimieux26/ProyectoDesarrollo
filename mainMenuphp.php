<?php

include("conexion.php");

session_start();

echo  $_SESSION['sessionUser']['usuario']."Id de usuario:".$_SESSION['sessionUser']['idRol'];





?>