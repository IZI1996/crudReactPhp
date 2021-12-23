<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require_once "connexion.php";

$id=$_GET['id'];

$query="select * from utilisateur where id = '{$id}' limit 1";
$resultt=mysqli_query($conn,$query);
$row = mysqli_fetch_assoc($resultt);
echo $json=json_encode($row); 