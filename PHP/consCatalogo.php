<?php
include("conexion.php");

$sql="SELECT IDArti, Nombre, Descripcion, Precio, Estado, UrlMaqui FROM maquinaria";

$maquinas=array();
$consulta=mysqli_query($conexion,$sql);



while($maquinas=mysqli_fetch_array($consulta)){
    echo "<div class='card' style='width: 18rem;'>
                <img class='card-img-top' src='".$maquinas["UrlMaqui"]."' alt='Card image cap'>
                <div class='card-body' id='body-card'>
                <h5 class='card-title'>".$maquinas["Nombre"]."</h5>
                <button type='button' class='btn btn-primary' data-toggle='modal' data-target='#Modal".$maquinas["IDArti"]."' id='".$maquinas["IDArti"]."'> Detalles </button>
                </div>
            </div>
            
            <div class='modal fade' id='Modal".$maquinas["IDArti"]."' tabindex='-1' role='dialog' aria-labelledby='VentanaTitulo' aria-hidden='true'>
            <div class='modal-dialog modal-dialog-centered' role='document'>
              <div class='modal-content'>
                <div class='modal-header'>
                  <h5 id='VentanaTitulo".$maquinas["IDArti"]."'>".$maquinas["Nombre"]."</h5>
                  <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                <div class='modal-body row'>
                  <div class= 'col-sm-6'> 
                    <h6 id='DesMaqu".$maquinas["IDArti"]."'>".$maquinas["Descripcion"]."</h6>
                  </div>
                  <div class='col-sm-2'>
                    <h6 id='precioMaqui".$maquinas["IDArti"]."'>Precio: ₡".$maquinas["Precio"]."</h6>
                    Cantidad de Artículos:<input type='number' id='CantidadMaquina".$maquinas["IDArti"]."' placeholder='Ingrese cantidad'></input>
                    Días de uso:<input type='number' id='CanDias".$maquinas["IDArti"]."' placeholder='Ingrese cantidad'></input>
                  </div>
                </div>
                <div class='modal-footer'>
                  <button type='button' class='btn btn-secondary' data-dismiss='modal'>Cerrar</button>
                  <button type='button'  class='fa fa-cart-plus btn btn-primary' id='btn_carrito' onclick='insert_car(".$maquinas["IDArti"].");'>Añadir al Carrito</button>
                </div>
              </div>
            </div>
          </div> ";

}







?>

