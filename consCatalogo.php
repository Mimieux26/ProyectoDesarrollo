<?php
include("conexion.php");

$sql="SELECT IDArti, Nombre, Descripcion, Precio, Estado FROM maquinaria";
mysqli_query($conexion,$sql);

$consulta = $conexion->prepare("Select * FROM maquinaria");
$consulta->execute();
$resultado = $consulta->get_result();

$arregloPadre = [];

    while ($maquinaria = $resultado->fetch_assoc()){

        $arregloHijo = [
            'IDArti'=> $maquinaria['IDArti'],
            'Nombre'=>$maquinaria['Nombre'],
            'Descripcion'=>$maquinaria['Descripcion'],
            'Precio'=>$maquinaria['Precio'],
            'Estado'=>$maquinaria['Estado']

        ];
        array_push($arregloPadre, $arregloHijo);

    }

    echo json_encode($arregloPadre)

?>