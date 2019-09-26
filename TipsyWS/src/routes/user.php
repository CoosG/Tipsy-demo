<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

$app = new \Slim\App;

//Get all users
$app->get('/api/user', function (Request $request, Response $response) {
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
});

//Get Single User
$app->get('/api/user/{id}', function (Request $request, Response $response) {

  $id = $request->getAttribute('id');
  $sql = "SELECT * FROM users WHERE u_id = $id";

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
});

// Add User
$app->post('/api/user/add', function (Request $request, Response $response) {

  $first_name = $request->getParam('u_name');
  $last_name = $request->getParam('u_surname');
  $unique_id = $request->getParam('u_uniqueid');
  $u_password = $request->getParam('u_password');
  $email = $request->getParam('u_email');
  $dob = $request->getParam('u_dob');

  $sql = "INSERT INTO `users`(`u_name`, `u_surname`, `u_uniqueid`, `u_password`, `u_email`, `u_dob`) VALUES
  (:u_name,:u_surname,:u_uniqueid,:u_password,:u_email,:u_dob)";

  try{
      //Get DB Object
      $db = new db();
      //Connect
      $db = $db->connect();

      $stmt = $db->prepare($sql);

      $stmt->bindParam(':u_name', $first_name);
      $stmt->bindParam(':u_surname', $last_name);
      $stmt->bindParam(':u_uniqueid', $unique_id);
      $stmt->bindParam(':u_password', $u_password);
      $stmt->bindParam(':u_email', $email);
      $stmt->bindParam(':u_dob', $dob);

      $stmt->execute();

      echo '{"notice": {"text": "User Added"}}';

  }catch(PDOException $e){
      echo '{"error": {"text": '.$e->getMessage().'}';
  }
});


// Update User
$app->put('/api/user/update/{id}', function (Request $request, Response $response) {

  $id = $request->getAttribute('id');
  $first_name = $request->getParam('u_name');
  $last_name = $request->getParam('u_surname');
  $unique_id = $request->getParam('u_uniqueid');
  $u_password = $request->getParam('u_password');
  $email = $request->getParam('u_email');
  $dob = $request->getParam('u_dob');

  $sql = "UPDATE `users` SET
            `u_id`=:u_id,
            `u_name`=:u_name,
            `u_surname`=:u_surname,
            `u_uniqueid`=:u_uniqueid,
            `u_password`=:u_password,
            `u_email`=:u_email,
            `u_dob`=:u_dob
            WHERE u_id = $id";

  try{
      //Get DB Object
      $db = new db();
      //Connect
      $db = $db->connect();

      $stmt = $db->prepare($sql);

      $stmt->bindParam(':u_id', $id);
      $stmt->bindParam(':u_name', $first_name);
      $stmt->bindParam(':u_surname', $last_name);
      $stmt->bindParam(':u_uniqueid', $unique_id);
      $stmt->bindParam(':u_password', $u_password);
      $stmt->bindParam(':u_email', $email);
      $stmt->bindParam(':u_dob', $dob);

      $stmt->execute();

      echo '{"notice": {"text": "User updated"}}';

  }catch(PDOException $e){
      echo '{"error": {"text": '.$e->getMessage().'}';
  }
});

// Add visit record
$app->post('/api/user/addvisit', function (Request $request, Response $response) {

  $u_id = $request->getParam('u_id');
  $l_id = $request->getParam('l_id');
  $v_atime = $request->getParam('v_atime');
  $v_dtime = $request->getParam('v_dtime');

  $sql = "INSERT INTO `visit`(`u_id`, `l_id`, `v_atime`, `v_dtime`) VALUES
  (:u_id,:l_id,:v_atime,:v_dtime)";

  try{
      //Get DB Object
      $db = new db();
      //Connect
      $db = $db->connect();

      $stmt = $db->prepare($sql);

      $stmt->bindParam(':u_id', $u_id);
      $stmt->bindParam(':l_id', $l_id);
      $stmt->bindParam(':v_atime', $v_atime);
      $stmt->bindParam(':v_dtime', $v_dtime);

      $stmt->execute();

      echo '{"notice": {"text": "Visit Added"}}';

  }catch(PDOException $e){
      echo '{"error": {"text": '.$e->getMessage().'}';
  }
});

//Get Amount of visitors during certain times
$app->get('/api/user/usersduringtime/{atime}/{dtime}/{lid}', function (Request $request, Response $response) {

  $atime = $request->getAttribute('atime');
  $dtime = $request->getAttribute('dtime');
  $lid = $request->getAttribute('lid');

  $sql = "SELECT COUNT(DISTINCT u_id)
          FROM visit
          WHERE (v_atime BETWEEN '$atime' AND '$dtime') AND (l_id = $lid);";

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
});

//Get Average amount of time users spend at location during certain time frame
$app->get('/api/user/avgtimevisit/{atime}/{dtime}/{lid}', function (Request $request, Response $response) {

  $atime = $request->getAttribute('atime');
  $dtime = $request->getAttribute('dtime');
  $lid = $request->getAttribute('lid');

  $sql = "SELECT ROUND(AVG(TIMESTAMPDIFF(MINUTE,v_atime,v_dtime))/60.0,2)
          FROM visit
          WHERE (v_atime BETWEEN '$atime' AND '$dtime') AND (l_id = $lid);";


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
});

// Add location record
$app->post('/api/user/addlocation', function (Request $request, Response $response) {

  $l_name = $request->getParam('l_name');
  $l_password = $request->getParam('l_password');

  $sql = "INSERT INTO `locations`(`l_name`, `l_password`) VALUES
  (:l_name,:l_password)";

  try{
      //Get DB Object
      $db = new db();
      //Connect
      $db = $db->connect();

      $stmt = $db->prepare($sql);

      $stmt->bindParam(':l_name', $l_name);
      $stmt->bindParam(':l_password', $l_password);

      $stmt->execute();

      echo '{"notice": {"text": "Location Added"}}';

  }catch(PDOException $e){
      echo '{"error": {"text": '.$e->getMessage().'}';
  }
});
