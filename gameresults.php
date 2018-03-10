<!doctype html>
<html>
  <head>
    <title></title>
  </head>
  <body>
  <h1>Scores!</h1>
  <?php
  //create short variable names
  $gametag=strtolower(trim($_POST['gametag']));
  
  //checks for correct data submitted
  if(!$searchtag){
    echo '<p>Please enter the correct tag</p>';
    exit;
  }
  
  //check if database connection
  $db=new mysqli('localhost', 'u856159605_quiz', 'Amand@l0ve', 'u856159605_quiz');
  if(mysqli_connect_errno()){
    echo '<p>Error. Could not connet to database</p>';
    exit;
  }
  
  $query="SELECT tag, fname, car, score FROM scoreboard WHERE tag=? ORDER BY score DESC";
  $stmt=$db->prepare($query);
  $stmt->bind_param('s', $gametag);
  $stmt->execute();
  $stmt->store_result();
  
  $stmt->bind_result($tag, $fname, $car, $score);
  ?>
  </body>
</html>