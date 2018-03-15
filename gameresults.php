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
  if(!$gametag){
    echo '<p>Please enter the correct gametag</p>';
    exit;
  }
  
  //check if database connection
  $db=new mysqli('localhost', 'u856159605_quiz', 'Amand@l0ve', 'u856159605_quiz');
  if(mysqli_connect_errno()){
    echo '<p>Error. Could not connet to database</p>';
    exit;
  }
  
  $query="SELECT gametag, fname, car, score FROM scoreboard WHERE gametag=? ORDER BY score DESC";
  $stmt=$db->prepare($query);
  $stmt->bind_param('s', $gametag);
  $stmt->execute();
  $stmt->store_result();
  
  $stmt->bind_result($gametag, $fname, $car, $score);
  
  echo 'Total players: '.$stmt->num_rows.'</p>';
  echo '<table>';
    echo '<tr>';
      echo '<th>Player</th>';
      echo '<th>Car</th>';
      echo '<th>Score</th>';
    echo '</tr>';
  while($stmt->fetch()){
    echo "<tr>";
      echo "<td>".$fname."</td>";
      echo "<td>".$car."</td>";
      echo "<td>".$score."</td>";
    echo "<tr>";
  }
  echo '</table>';
  $stmt->free_result();
  $stmt->close();
  ?>
  </body>
</html>