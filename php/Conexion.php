<?php
/*
$servername = "localhost";
$username = "TeemoPatriarca";
$password = "soyleyenda666";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";*/

$usuario  = "UserSuplos";
$password = "215233";
$servidor = "localhost";
$basededatos = "db_suplostest";
$con = mysqli_connect($servidor, $usuario, $password) or die("No se ha podido conectar al Servidor");
$db = mysqli_select_db($con, $basededatos) or die("Upps! Error en conectar a la Base de Datos");

?>
