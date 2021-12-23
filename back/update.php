<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: Post,Get,Patch");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require_once "connexion.php";

$json =file_get_contents('php://input');
$obj = json_decode($json,true);
extract($obj);

$id=$_GET['id'];


$query="UPDATE  utilisateur SET username='$username', email='$email', job='$job',tel='$tel' where id = '{$id}' limit 1" ;
if ($conn->query($query) === TRUE) {
  http_response_code(200);
  echo json_encode(array("message" => "User was successfully update."));
}
else{
  http_response_code(400);

  echo json_encode(array("message" => "Unable to update the user."));
}