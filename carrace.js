//User clicks an image and makes it go to the canvas
var img;
var x=50;
var dx=1;
var score=0;
var tag=prompt("If you are playing this game as a class, enter the tag given to you: ");
var playername=prompt("Enter your name: ");

function chooseCar(carmodel){
  img=new Image();
  img.src="images/"+carmodel+".jpg";
  var startbutton=document.getElementById("startbutton");
  startbutton.style.display="inline-block";
  return img, carmodel;
}

//displays name
function nameAlert(){
  playerName = document.getElementById("namefield").value;
  console.log(playerName);
  document.getElementById("startbutton").style.color="black";
}

//displays questions
function displayQuestions(){
  document.getElementById("questions").style.display="block";
  document.getElementById("questionbody").innerHTML="Place your car on the racetrack!";
  document.getElementById("option1").value=50;
  document.getElementById("option1").innerHTML="Place car!";
  document.getElementById("question").onchange=function(){
  score=score+parseInt(document.getElementById("question").value);
  moveCar();
    document.getElementById("questions").style.display="block";
    document.getElementById("questionbody").innerHTML="What's your question?";
    document.getElementById("option1").value=40;
    document.getElementById("option1").innerHTML="Option 1";
    document.getElementById("option2").value=39;
    document.getElementById("option2").innerHTML="Option 2";
    document.getElementById("option3").value=38;
    document.getElementById("option3").innerHTML="Option 3";
    document.getElementById("option4").value=37;
    document.getElementById("option4").innerHTML="Option 4";
    document.getElementById("question").onchange=function(){
      score=score+parseInt(document.getElementById("question").value);
      moveCar();
      document.getElementById("questions").style.display="block";
      document.getElementById("questionbody").innerHTML="What's your other question?";
      document.getElementById("option0").selected="selected";
      document.getElementById("option1").value=38;
      document.getElementById("option1").innerHTML="Option 5";
      document.getElementById("option2").value=40;
      document.getElementById("option2").innerHTML="Option 6";
      document.getElementById("option3").value=39;
      document.getElementById("option3").innerHTML="Option 7";
      document.getElementById("option4").value=37;
      document.getElementById("option4").innerHTML="Option 8";
      document.getElementById("question").onchange=function(){
        score=score+parseInt(document.getElementById("question").value);
        moveCar();
        document.getElementById("questions").style.display="block";
        document.getElementById("questionbody").innerHTML="Do you have any question?";
        document.getElementById("option0").selected="selected";
        document.getElementById("option1").value=38;
        document.getElementById("option1").innerHTML="Option 5";
        document.getElementById("option2").value=40;
        document.getElementById("option2").innerHTML="Option 6";
        document.getElementById("option3").value=39;
        document.getElementById("option3").innerHTML="Option 7";
        document.getElementById("option4").value=37;
        document.getElementById("option4").innerHTML="Option 8";
        document.getElementById("question").onchange=function(){
          score=score+parseInt(document.getElementById("question").value);
          moveCar();
          document.getElementById("questions").style.display="block";
          document.getElementById("questionbody").innerHTML="why so many questions?";
          document.getElementById("option0").selected="selected";
          document.getElementById("option1").value=38;
          document.getElementById("option1").innerHTML="Option 5";
          document.getElementById("option2").value=40;
          document.getElementById("option2").innerHTML="Option 6";
          document.getElementById("option3").value=39;
          document.getElementById("option3").innerHTML="Option 7";
          document.getElementById("option4").value=37;
          document.getElementById("option4").innerHTML="Option 8";
          return;
        };
      };
    };
  };
}

function moveCar(){
  //moves car every time a question is answered
  sendToDb();
  console.log(score);
  var raceCanvas=document.getElementById("racecanvas");
  raceCanvas.width=window.innerWidth;
  var ctx=raceCanvas.getContext("2d");
  var cartoon=requestAnimationFrame(moveCar);
  ctx.drawImage(img, x, 50);
  x+=dx;
  console.log("function called");
  if(x>score){
    cancelAnimationFrame(cartoon);
  }
}

function sendToDb(){
  console.log(img);
  console.log("I'm here!");
  document.getElementById("tag").value=tag;
  document.getElementById("fname").value=playername;
  document.getElementById("car").value=img;
  document.getElementById("score").value=score;
}
