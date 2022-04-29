<?php
include("Conexion.php") ; 
$sqlAlumnos   = ("SELECT * FROM databienesraices");
$queryAlumnos = mysqli_query($con, $sqlAlumnos);
$totalAlumnos = mysqli_num_rows($queryAlumnos);

$obj = array() ;

if ($totalAlumnos > 0) {
    // output data of each row
    while ($row = mysqli_fetch_array($queryAlumnos)) {
      $newarray = array($row["ID"] , $row["Direccion"] , $row["Ciudad"] , $row["Telefono"] , $row["Codigo_Postal"] , $row["Tipo"] , $row["Precio"] ) ;
      //$obj_data = {"id" : $row["ID"]  , "Direccion" : $row["Direccion"] };
      array_push($obj, $newarray )  ;
    }
    echo json_encode($obj);
    //echo JSON_ENCODE(($mysqli_fetch_array));
  } else {
    echo "0 results";
  }


/*
$servername = "localhost";
$username = "TeemoPatriarca";
$password = "soyleyenda666";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    echo("faild") ; 
  die("Connection failed: " . $conn->connect_error);
}else{
    //echo($conn);
      
  $sql = "SELECT * FROM databienesraices";
  $result = $conn->query($sql);
  //echo JSON_ENCODE($result) ; 
  
  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      echo "id: " . $row["ID"]. " - Name: " . $row["Direccion"]. " " . $row["Ciudad"]. "<br>";
    }
  } else {
    echo "0 results";
  }
  $conn->close();

}*/
// echo "Connected successfully"; 


?>