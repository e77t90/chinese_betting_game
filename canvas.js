var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

if (window.innerHeight < window.innerWidth) {
  var width = canvas.width = window.innerHeight;
  var height = canvas.height = window.innerHeight;
}else {
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerWidth;
}

var diceArray = [];
var dice_width = height/12;

var currentCoin = 10;
betCoin_image = new Image();
betCoin_image.src = 'img/1.png';
function drawBetCoin() {
  context.drawImage(betCoin_image, mouseX - height/24, mouseY - height/24, height/12, height/12);
}

//initial dice configuration
dice1_image = new Image();
dice1_image.src = 'img/dice_1.png';
dice2_image = new Image();
dice2_image.src = 'img/dice_2.png';
dice3_image = new Image();
dice3_image.src = 'img/dice_3.png';
diceArray = [dice1_image, dice2_image, dice3_image];

function loadBGTop() {
  bg_top = new Image();
  bg_top.src = 'img/bg_top.png';
  //b1_image.style.border = "thin solid red"; 
  bg_top.onload = function(){
    context.drawImage(bg_top, 0, 0, height, height/4 - height/24);

    //Draw bank account on canvas
    context.fillStyle = "black";
    context.font = "35px Arial";
    context.fillText("$" + game.bank, height*3/4 + height/16, height/6 - height/45); 



    //draw the undo button
    context.fillStyle = "#00bcd4";
    context.fillRect(0, 0, height/7, height/8);
    context.fillStyle = "black";
    context.font = "30px 微軟正黑體";
    context.fillText("重設", height/40, height/8 - height/23); 

    make_base_top();
    
  };
}

function loadBGMid() {
  bg_mid = new Image();
  bg_mid.src = 'img/bg_mid.png';
  //b1_image.style.border = "thin solid red"; 
  bg_mid.onload = function(){
    context.drawImage(bg_mid, 0, height/4 - height/24, height, height/2 + height/12);
    make_base_mid();
  };
}

function loadBGBottom() {
  bg_buttom = new Image();
  bg_buttom.src = 'img/bg_buttom.png';
  //b1_image.style.border = "thin solid red"; 
  bg_buttom.onload = function(){
    context.drawImage(bg_buttom, 0, height*3/4 + height/24, height, height/4 - height/24);
    make_base_bottom();
  };
}

function make_base_top()
{
  make_dice();
}

function make_base_mid()
{
  b1_image = new Image();
  b1_image.src = 'img/b1.png';
  //b1_image.style.border = "thin solid red"; 
  b1_image.onload = function(){
    context.drawImage(b1_image, 0, height/4, height/4, height/4);
  };

  b2_image = new Image();
  b2_image.src = 'img/b2.png';
  b2_image.onload = function(){
    context.drawImage(b2_image, 0, height/2, height/4, height/4);
  };

  b3_image = new Image();
  b3_image.src = 'img/b3.png';
  b3_image.onload = function(){
    context.drawImage(b3_image, height/4, height/2, height/4, height/4);
  };

  b4_image = new Image();
  b4_image.src = 'img/b4.png';
  b4_image.onload = function(){
    context.drawImage(b4_image, height/2, height/2, height/4, height/4);
  };

  b5_image = new Image();
  b5_image.src = 'img/b5.png';
  b5_image.onload = function(){
    context.drawImage(b5_image, height*3/4, height/2, height/4, height/4);
  };

  b6_image = new Image();
  b6_image.src = 'img/b6.png';
  b6_image.onload = function(){
    context.drawImage(b6_image, height*3/4, height/4, height/4, height/4);
  };

  center_image = new Image();
  center_image.src = 'img/center.png';
  center_image.onload = function(){
    context.drawImage(center_image, height/4, height/4, height/2, height/4);
  };

}

function make_base_bottom()
{
  //draw play button
  context.fillStyle = "#f44336";
  context.fillRect(height*3/4, height*5/6, height/4, height/3);
  context.fillStyle = "black";
  context.font = "30px 微軟正黑體";
  context.fillText("下注", height*3/4 + height/16, height*11/12 + height/45); 

  //drawing coin icons
  c1_image = new Image();
  c1_image.src = 'img/1.png';
  //b1_image.style.border = "thin solid red"; 
  c1_image.onload = function(){
    context.drawImage(c1_image, 0, height*5/6, height/12, height/12);
  };

  c10_image = new Image();
  c10_image.src = 'img/10.png';
  //b1_image.style.border = "thin solid red"; 
  c10_image.onload = function(){
    context.drawImage(c10_image, height/10, height*5/6, height/12, height/12);
  };

  c50_image = new Image();
  c50_image.src = 'img/50.png';
  //b1_image.style.border = "thin solid red"; 
  c50_image.onload = function(){
    context.drawImage(c50_image, height*2/10, height*5/6, height/12, height/12);
  };

  c100_image = new Image();
  c100_image.src = 'img/100.png';
  //b1_image.style.border = "thin solid red"; 
  c100_image.onload = function(){
    context.drawImage(c100_image, height*3/10, height*5/6, height/12, height/12);
  };

  c500_image = new Image();
  c500_image.src = 'img/500.png';
  //b1_image.style.border = "thin solid red"; 
  c500_image.onload = function(){
    context.drawImage(c500_image, height*4/10, height*5/6, height/12, height/12);
  };

  c1000_image = new Image();
  c1000_image.src = 'img/1000.png';
  //b1_image.style.border = "thin solid red"; 
  c1000_image.onload = function(){
    context.drawImage(c1000_image, height*5/10, height*5/6, height/12, height/12);
  };

  c5000_image = new Image();
  c5000_image.src = 'img/5000.png';
  //b1_image.style.border = "thin solid red"; 
  c5000_image.onload = function(){
    context.drawImage(c5000_image, height*6/10, height*5/6, height/12, height/12);
  };
}

function make_dice()
{
  bowl_image = new Image();
  bowl_image.src = 'img/bowl.png';

  bowl_image.onload = function(){
    console.log("oh, the bowl image onload function is fired");

    context.drawImage(bowl_image, height/4, 0, height/2, height/5);
    /*
    context.drawImage(dice1_image, height/2 - dice_width/2, (height/6 - dice_width)/2, dice_width, dice_width);
    context.drawImage(dice2_image, height/2 - (height/4 - dice_width*2.2) - dice_width, (height/6 - dice_width)/2, dice_width, dice_width);
    context.drawImage(dice3_image, height/2 + (height/4 - dice_width*2.2), (height/6 - dice_width)/2, dice_width, dice_width);
    */

    dice1_image.onload = function(){
      context.drawImage(dice1_image, height*11/24, height/24, height/12, height/12);
    };
    dice2_image.onload = function(){
      context.drawImage(dice2_image, height*0.35, height*0.0416, height/12, height/12);
    };
    dice3_image.onload = function(){
      context.drawImage(dice3_image, height*0.566, height*0.0416, height/12, height/12);
    };


    context.drawImage(dice1_image, height*11/24, height/24, height/12, height/12);
    context.drawImage(dice2_image, height*0.35, height*0.0416, height/12, height/12);
    context.drawImage(dice3_image, height*0.566, height*0.0416, height/12, height/12);

  };

}

//loading dice image function
function load_dice_1() {

}


//document.getElementById('keyPart').style.width = "100px";

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

$('.keyPart').width($(window).height());