//User clicks an image and makes it go to the canvas
function chooseCar(carmodel){
  var img=new Image();
  img.src="images/"+carmodel+".jpg";
  console.log(img);
  var raceCanvas=document.getElementById("racecanvas");
  var ctx=raceCanvas.getContext("2d");
  ctx.drawImage(img, 50, 50);
}

//displays questions
function displayQuestions(){
  document.getElementById("questions").style.display="block";
  document.getElementById("questionbody").innerHTML="What's your question?";
  document.getElementById("option1").innerHTML="Option 1";
  document.getElementById("option2").innerHTML="Option 2";
  document.getElementById("option3").innerHTML="Option 3";
  document.getElementById("option4").innerHTML="Option 4";
  document.getElementById("question").onchange=function(){
    document.getElementById("questions").style.display="block";
  document.getElementById("questionbody").innerHTML="What's your other question?";
  document.getElementById("option1").innerHTML="Option 5";
  document.getElementById("option2").innerHTML="Option 6";
  document.getElementById("option3").innerHTML="Option 7";
  document.getElementById("option4").innerHTML="Option 8";
  };
}

function moveCar(){
  
}

function sentToDb(){
  
}
