<!doctype html>
<html>
  <head>
    <title>Insert scores into database</title>
  </head>
  <body>
<?php
// chech for inputs
if(!isset($_POST['gametag'])){
  echo "<p>Not enough info</p>";
  exit;
}

//create short variable names
$gametag=strtolower(trim($_POST['gametag']));
$fname=$_POST['fname'];
$car=$_POST['car'];
$score=$_POST['score'];

//begin database session
@$db=new mysqli('localhost', 'u856159605_quiz', 'Amand@l0ve', 'u856159605_quiz');

if(mysqli_connect_errno()){
  echo '<p>Error. Cannot connect to the database</p>';
  exit;
}

$query="INSERT INTO scoreboard (gametag, fname, car, score) VALUES (?, ?, ?, ?)";
$stmt=$db->prepare($query);
$stmt->bind_param('ssss', $gametag, $fname, $car, $score);
$stmt->execute();

if($stmt->affected_rows > 0){
  echo '<p>Thank you for playing!</p>';
}else{
  echo '<p>ooops!</p>';
}
$db->close();
?>
</body>
</html>