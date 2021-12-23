<?php
$servername = "localhost";
$usernamee = "root";
$password = "";
$db = "reactphp";


// Create connection
$conn = new mysqli($servername, $usernamee, $password,$db);



// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>