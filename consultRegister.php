<?php
include("conexion.php");

$sql="SELECT Cedula, TipIden, IDRol, Nombre, PriApel, SegApel, Telefono, Email FROM usuarios";

$usuarios=array();
$consulta=mysqli_query($conexion,$sql);

echo " <tr>
            <th>Numero de identificacion</th>
            <th>Tipo de identificacion</th>
            <th>Id de rol</th>
            <th>Nombre</th>
            <th>Primer Apellido</th>
            <th>Segundo Apellido</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Accion</th>
      </tr>";

while($usuarios=mysqli_fetch_array($consulta)){

    echo "<tr>";
    echo "<td>".$usuarios["Cedula"]."</td>";
    echo "<td>".$usuarios["TipIden"]."</td>";
    echo "<td>".$usuarios["IDRol"]."</td>";
    echo "<td>".$usuarios["Nombre"]."</td>";
    echo "<td>".$usuarios["PriApel"]."</td>";
    echo "<td>".$usuarios["SegApel"]."</td>";
    echo "<td>".$usuarios["Telefono"]."</td>";
    echo "<td>".$usuarios["Email"]."</td>";
    echo "<td>
            <button type='button' class='btn btn-warning' onclick='show_user(".$usuarios["Cedula"].");'>Editar</button>
            </td>";
    echo "</tr>";


}







?>