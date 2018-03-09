<?php
// chech for inputs
if(!isset($_POST['tag'])){
  echo "<p>Not enough info</p>";
  exit;
}

//create short variable names
$tag=strtolower(trim($_POST['tag']));
$fname=$_POST['fname'];
$car=$_POST['car'];
$score=$_POST['score'];

//begin database session
@$db=new mysqli('localhost', 'u856159605_quiz', 'Amand@l0ve', 'u856159605_quiz');

if(mysqli_connect_errno()){
  echo '<p>Error. Cannot connect to the database</p>';
  exit;
}

$query="INSERT INTO scoreboard (tag, fname, car, score) VALUES (?, ?, ?, ?)";
$stmt=$db->prepare($query);
$stmt->bind_param('ssss', $tag, $fname, $car, $score);
$stmt->execute();

if($stmt->affected_rows > 0){
  echo '<p>Thank you for playing!</p>';
}else{
  echo '<p>ooops!</p>';
}
$db->close();
?>