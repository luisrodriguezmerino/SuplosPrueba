<?php

require('Conexion.php') ; 

$direccion = $_POST['Direccion'] ; 
$ciudad = $_POST['Ciudad'] ; 
$telefono = $_POST['Telefono'] ; 
$codigoPostal = $_POST['Codigo_Postal'] ; 
$tipo = $_POST['Tipo'] ; 
$precio = $_POST['Precio'] ; 

$insert = ("INSERT INTO databienesraices (`Direccion`, `Ciudad`, `Telefono`, `Codigo_Postal`, `Tipo`, `Precio`) VALUES ('$direccion','$ciudad','$telefono','$codigoPostal','$tipo','$precio')") ;


if(mysqli_query($con, $insert)){
    echo json_encode(array('error' => false)) ; 
}else{
    echo json_encode(array("error" => true)) ; 
}

?>