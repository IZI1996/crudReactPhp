<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require_once "connexion.php";

$json =file_get_contents('php://input');
$obj = json_decode($json,true);

extract($obj);



$query="INSERT INTO utilisateur (username, email, job,tel) VALUES ('$username', '$email', '$job','$tel')";
if ($conn->query($query) === TRUE) {
  http_response_code(200);
  echo json_encode(array("message" => "User was successfully registered."));
}
else{
  http_response_code(400);

  echo json_encode(array("message" => "Unable to register the user."));
}