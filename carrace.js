//User clicks an image and makes it go to the canvas
var bkg;
var img;
var x=10;
var dx=0.25;
var mountain;
var mountainx=960;
var mountaindx=1;
var carmodel;
var kmarker1;
var kmarker1x=1250;
var kmarker1dx=8;
var kmarker2;
var kmarker2x=3250;
var kmarker2dx=8;
var kmarker3;
var kmarker3x=5250;
var kmarker3dx=8;
var kmarker4;
var kmarker4x=7250;
var kmarker4dx=8;
var kmarker5;
var kmarker5x=9250;
var kmarker5dx=8;
var kmarker6;
var kmarker6x=11250;
var kmarker6dx=8;
var kmarker7;
var kmarker7x=13250;
var kmarker7dx=8;
var finflag;
var finflagx=15250;
var finflagdx=8;
var tree1;
var tree1x=150;
var tree1dx=8;
var tree2;
var tree2x=500;
var tree2dx=12;
var score=0;
var gametag=prompt("If you are playing this game as a class, enter the gametag given to you: ");
var playername=prompt("Enter your name: ");


function chooseCar(carmodel){
  img=new Image();
  img.src="images/"+carmodel+".png";
  bkg=new Image();
  bkg.src="images/landscape.png";
  mountain=new Image();
  mountain.src="images/mountain.png";
  tree1=new Image();
  tree1.src="images/tree1.png";
  tree2=new Image();
  tree2.src="images/tree2.png";
  kmarker1=new Image();
  kmarker1.src="images/kmarker1.png";
  kmarker2=new Image();
  kmarker2.src="images/kmarker2.png";
  kmarker3=new Image();
  kmarker3.src="images/kmarker3.png";
  kmarker4=new Image();
  kmarker4.src="images/kmarker4.png";
  kmarker5=new Image();
  kmarker5.src="images/kmarker5.png";
  kmarker6=new Image();
  kmarker6.src="images/kmarker6.png";
  kmarker7=new Image();
  kmarker7.src="images/kmarker7.png";
  finflag=new Image();
  finflag.src="images/finflag.png";
  var startbutton=document.getElementById("startbutton");
  startbutton.style.display="inline-block";
  document.getElementById("car").value="images/"+carmodel+".png";
  document.getElementById("startbutton").style.color="black";
  return img, carmodel;
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
    document.getElementById("option1").value=50;
    document.getElementById("option1").innerHTML="Option 1";
    document.getElementById("option2").value=49;
    document.getElementById("option2").innerHTML="Option 2";
    document.getElementById("option3").value=48;
    document.getElementById("option3").innerHTML="Option 3";
    document.getElementById("option4").value=47;
    document.getElementById("option4").innerHTML="Option 4";
    document.getElementById("question").onchange=function(){
      score=score+parseInt(document.getElementById("question").value);
      moveCar();
      document.getElementById("questions").style.display="block";
      document.getElementById("questionbody").innerHTML="What's your other question?";
      document.getElementById("option0").selected="selected";
      document.getElementById("option1").value=48;
      document.getElementById("option1").innerHTML="Option 5";
      document.getElementById("option2").value=50;
      document.getElementById("option2").innerHTML="Option 6";
      document.getElementById("option3").value=49;
      document.getElementById("option3").innerHTML="Option 7";
      document.getElementById("option4").value=47;
      document.getElementById("option4").innerHTML="Option 8";
      document.getElementById("question").onchange=function(){
        score=score+parseInt(document.getElementById("question").value);
        moveCar();
        document.getElementById("questions").style.display="block";
        document.getElementById("questionbody").innerHTML="Do you have any question?";
        document.getElementById("option0").selected="selected";
        document.getElementById("option1").value=48;
        document.getElementById("option1").innerHTML="Option 5";
        document.getElementById("option2").value=50;
        document.getElementById("option2").innerHTML="Option 6";
        document.getElementById("option3").value=49;
        document.getElementById("option3").innerHTML="Option 7";
        document.getElementById("option4").value=47;
        document.getElementById("option4").innerHTML="Option 8";
        document.getElementById("question").onchange=function(){
          score=score+parseInt(document.getElementById("question").value);
          moveCar();
          document.getElementById("questions").style.display="block";
          document.getElementById("questionbody").innerHTML="why so many questions?";
          document.getElementById("option0").selected="selected";
          document.getElementById("option1").value=48;
          document.getElementById("option1").innerHTML="Option 5";
          document.getElementById("option2").value=50;
          document.getElementById("option2").innerHTML="Option 6";
          document.getElementById("option3").value=49;
          document.getElementById("option3").innerHTML="Option 7";
          document.getElementById("option4").value=47;
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
  var raceCanvas=document.getElementById("racecanvas");
  raceCanvas.height=720;
  raceCanvas.width=960;
  var ctx=raceCanvas.getContext("2d");
  ctx.drawImage(bkg, 0, 0);
  var cartoon=requestAnimationFrame(moveCar);
  ctx.drawImage(mountain, mountainx, 145);
  mountainx-=mountaindx;
  ctx.drawImage(tree1, tree1x, 270);
  tree1x-=tree1dx;
  ctx.drawImage(kmarker1, kmarker1x, 370, 350, 300);
  kmarker1x-=kmarker1dx;
  ctx.drawImage(kmarker2, kmarker2x, 370, 350, 300);
  kmarker2x-=kmarker2dx;
  ctx.drawImage(kmarker3, kmarker3x, 370, 350, 300);
  kmarker3x-=kmarker3dx;
  ctx.drawImage(kmarker4, kmarker4x, 370, 350, 300);
  kmarker4x-=kmarker4dx;
  ctx.drawImage(kmarker5, kmarker5x, 370, 350, 300);
  kmarker5x-=kmarker5dx;
  ctx.drawImage(kmarker6, kmarker6x, 370, 350, 300);
  kmarker6x-=kmarker6dx;
  ctx.drawImage(kmarker7, kmarker7x, 370, 350, 300);
  kmarker7x-=kmarker7dx;
  ctx.drawImage(finflag, finflagx, 370, 350, 200);
  finflagx-=finflagdx;
  ctx.drawImage(img, x, 430);
  x+=dx;
  ctx.drawImage(tree2, tree2x, 450);
  tree2x-=tree2dx;
  if(x>score){
    cancelAnimationFrame(cartoon);
  }
}

function sendToDb(img){
  console.log(img);
  console.log("I'm here!");
  document.getElementById("gametag").value=gametag;
  document.getElementById("fname").value=playername;
  document.getElementById("score").value=score;
}
