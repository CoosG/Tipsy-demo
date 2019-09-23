<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

$app = new \Slim\App;

$app->get('/api/user',function(Request $request, Response $response){
  echo 'CUSTOMER';
});
//Get all users
/*$app->get('/api/user', function (Request $request, Response $response) {
  $sql = "SELECT * FROM users";

  try{
      //Get DB Object
      $db = new db();
      //Connect
      $db = $db->connect();

      $stmt = $db->query($sql);
      $users = $stmt->fetchAll(PDO::FETCH_OBJ);
      $db = null;
      echo json_encode($users);

  }catch(PDOException $e){
      echo '{"error": {"text": '.$e->getMessage().'}';
  }
});*/
