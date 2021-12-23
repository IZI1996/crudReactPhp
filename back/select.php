<?php

require_once "connexion.php";

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$json =file_get_contents('php://input');
$obj = json_decode($json,true);


// select
$utilisateur=[];
$query="SELECT * FROM utilisateur";
$resultt=mysqli_query($conn,$query);
$count= mysqli_num_rows($resultt);
// echo $count.' <br>';
if($resultt)
{
    $count=0;

while($ligne = mysqli_fetch_assoc($resultt)){ 
    $utilisateur[$count]['id']=$ligne['id'];
    $utilisateur[$count]['username']=$ligne['username'];
    $utilisateur[$count]['email']=$ligne['email'];
    $utilisateur[$count]['job']=$ligne['job'];
    $utilisateur[$count]['tel']=$ligne['tel'];
    $count++;
    
}
// print_r($utilisateur);

echo json_encode( $utilisateur);

}else{
    http_response_code(404);
}


?>