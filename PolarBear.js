var paddleHeight = 10;
var paddleWidth = 75;
var rightPressed = false;
var leftPressed = false;
var ctx = document.getElementById("myCanvas").getContext('2d');
var bear;
var pbImage = false;
var speedBear = 10;
var speedScreen = 6;
var winning = false;
var speedBear = 10;
var speedUp = 10;
var speedScreen = 6;
var winning = false;
var bear = new Bear(100,290);
var sealDraw1 = new Seal1(90, 450);
var sealDraw2 = new Seal2(300, 500);
var sealDraw3 = new Seal3(650, 400);
var number = 1;
var sealAppear = 1;
var sealAppear2 = 1;
var sealAppear3 = 1;


var sealScore1 = 0;
var sealScore2 = 0;
var sealScore3 = 0;
var count = 0;
var notif=setInterval(function(){
      $('blink').each(function() {
        $(this).toggle();
      });
    }, 350);



//starting functions
var strings = [
  "The polar bear is the Arctic's top predator.",
  "The scientific name of the polar bear is Ursus maritimus.",
  "The polar bear is an endangered species.",
  "Two thirds of all polar bears live in Canadian land.",
  "Polar bears rely on sea ice that allows them to have access to seals, their main food source. Sea ice is melting due to climate change, which is a major threat to the bears."
]

//setting the background images
var backgroundImages = new function () {
  this.myCanvas = new Image();
  this.myCanvas.src = "sky.jpg";

}
function backgroundClear(){
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
}
function drawScore() {
  var sealScore = sealScore1 + sealScore2 + sealScore3;
  ctx.font = "30px Tajawal";
  ctx.fillStyle = "black";
  ctx.fillText("Score: " + sealScore, 10, 35);
  if(count == 1) {
    backgroundClear();
    alert("YOU WIN!");
    document.location.reload();
  }
  if (sealScore == 3){
    count = 1;
  }
}
//moving the objects and animals in the game
function Bear(x, y){
  this.x = x;
  this.y = y;
  this.image = new Image ();
  this.image.src = "PolarBearDraw1.png";
  this.drawBear = function(id){
    var img = document.getElementById(id);
    ctx.drawImage(img, this.x, this.y,194.12,150);
    this.hideSeal();
    this.hideSeal2();
    this.hideSeal3();
    drawScore();

  }
    this.moveBearRight = function() {
      this.x = this.x + speedBear;
    }
    this.moveBearLeft = function(){
      this.x = this.x - speedBear;
   }
   this.moveBearUp = function(){
     this.y = this.y - speedUp;
   }
   this.moveBearDown = function(){
     this.y = this.y + speedUp;
}
    this.hideSeal = function() {
      console.log("running hide seal", sealAppear);
      console.log(this.x, sealDraw1.x, this.y, sealDraw1.y);
      if( 90<=this.x && this.x<=155 && 356.3<=this.y && this.y<=450){
          sealDraw1.eat();
             }
           }
    this.hideSeal2 = function() {
      console.log("running hide seal", sealAppear);
      console.log(this.x, sealDraw2.x, this.y, sealDraw2.y);
      if( 300<=this.x && this.x<=365 && 406.3<=this.y && this.y<=500){
          sealDraw2.eat();
               }
             }
     this.hideSeal3 = function() {
       console.log("running hide seal", sealAppear);
       console.log(this.x, sealDraw3.x, this.y, sealDraw3.y);
       if(556.3<=this.x && this.x<=650 && 306.3<=this.y && this.y<=400){
           sealDraw3.eat();
                }
              }

      }


function keyCheck(e){
    if(winning == true){
      if (e.keyCode === 32){
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
        ctx.globalAlpha=1;
        bearAnimate();
        sealShowUp();
        sealShowUp2();
        sealShowUp3();
        document.getElementById("bgstory").style.display="none";
        document.getElementById("instruct").style.display="none";
        document.getElementById("spacecontinue").style.display="none";
      }
      if (bear.y < 500){
        if(e.keyCode === 39) {
            bear.moveBearRight();
            backgroundClear();
            sealShowUp();
            sealShowUp2();
            sealShowUp3();
            bearAnimate();
        }
        else if(e.keyCode === 37) {
            bear.moveBearLeft();
            backgroundClear();
            sealShowUp();
            sealShowUp2();
            sealShowUp3();
            bearAnimate();
        }
        else if(e.keyCode === 38){
              bear.moveBearUp();
              backgroundClear();
              sealShowUp();
              sealShowUp2();
              sealShowUp3();
              bearAnimate();
            }
        else if(e.keyCode === 40){
              bear.moveBearDown();
              backgroundClear();
              sealShowUp();
              sealShowUp2();
              sealShowUp3();
              bearAnimate();
            }
          }
        }
        else{
          if(e.keyCode === 13){
            startgame();
          }
        }
    }

function bearAnimate(){
  var number1;
  if (number==1){
    number1 = "bearwalk2";
    bear.drawBear(number1);
    number +=1;
  }
  else if (number ==2){
    number1 = "bearwalk3";
    bear.drawBear(number1);
    number +=1;
  }
  else if (number ==3){
    number1 = "bearwalk4";
    bear.drawBear(number1);
    number +=1;
  }
  else if (number ==4){
    number1 = "bearwalk5";
    bear.drawBear(number1);
    number +=1;
  }
  else if (number ==5){
    number1 = "bearwalk6";
    bear.drawBear(number1);
    number +=1;
  }
  else if (number ==6){
    number1 = "bearwalk7";
    bear.drawBear(number1);
    number +=1;
  }
  else{
    number1 = "bearwalk8";
    bear.drawBear(number1);
    number=1;
  }
}



function Seal1(x, y){
  this.x = x;
  this.y = y;
  this.eat = function(){
  sealAppear = 0;
  sealScore1 = 1;
  }
  this.image = new Image ();
  this.image.src = "SealEyebrows.png";
  this.drawSeal1 = function(id){
    var img = document.getElementById(id);
    ctx.drawImage(img, this.x, this.y,93.7,65);
  }
}

function sealShowUp(){
  var number1;
  if (sealAppear==1){
    number1 = "seal1";
    sealDraw1.drawSeal1(number1);
    sealAppear =1;
  }
}


function Seal2(x, y){
  this.x = x;
  this.y = y;
  this.eat = function(){
    sealAppear2 = 0;
    sealScore2 = 1;
  }
  this.image = new Image ();
  this.image.src = "SealEyebrows.png";
  this.drawSeal2 = function(id){
    var img = document.getElementById(id);
    ctx.drawImage(img, this.x, this.y,93.7,65);
  }
}

function sealShowUp2(){
  var number1;
  if (sealAppear2 ==1){
    number1 = "seal2";
    sealDraw2.drawSeal2(number1);
    sealAppear2 =1;
  }
}


function Seal3(x, y){
  this.x = x;
  this.y = y;
  this.eat = function(){
    sealAppear3 = 0;
    sealScore3 = 1;
  }
  this.image = new Image ();
  this.image.src = "SealEyebrows.png";
  this.drawSeal3 = function(id){
    var img = document.getElementById(id);
    ctx.drawImage(img, this.x, this.y, 93.7,65);
  }
}


function sealShowUp3(){
  var number1;
  if (sealAppear3 ==1){
    number1 = "seal3";
    sealDraw3.drawSeal3(number1);
    sealAppear3 = 1;
  }
}







document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function titlechange(word){
  word.style.display='block';
}
function appear(word){
  setTimeout(titlechange(word),1000);
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}


function keyDownHandler(e) {
    if(e.keyCode == 13) {
      //startgame();
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle();
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
}

function startgame(){
    ctx = document.getElementById('myCanvas').getContext('2d');
    if(0 <= bear.x <= 390){
      document.getElementById('myCanvas').style.backgroundImage="url('bg1.jpg')"
    }
    else if(390 <= bear.x <= 450){
      document.getElementById('myCanvas').style.backgroundImage="url('bg2.jpg')"
    }
    else if(450 <= bear.x <= 576){
      document.getElementById('myCanvas').style.backgroundImage="url('bg3.jpg')"
    }
    document.getElementById("polartitle").style.display = "none";
    document.getElementById("polartitle2").style.display = "none";
    clearInterval(notif);
    document.getElementById("startnotif").style.display = "none";
    //bearAnimation();
    //startIcebergg();
    document.getElementById("bgstory").style.display="block";
    document.getElementById("instruct").style.display="block";
    document.getElementById("spacecontinue").style.display="block";
    startgame = true;
    drawDial();
    winning = true;


    }
function drawDial(){

  ctx.globalAlpha=0.5;
  var dialoguebox = ctx.fillRect((myCanvas.width/2)-(250),(myCanvas.height/2)-(200),500,400);
}
