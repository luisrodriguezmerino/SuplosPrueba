<?php

require('Conexion.php') ; 

$id = $_POST['Id'] ; 

$delete = ("DELETE FROM databienesraices WHERE id=$id") ;


if(mysqli_query($con, $delete)){
    echo json_encode(array('error' => false)) ; 
}else{
    echo json_encode(array("error" => true)) ; 
}

?>