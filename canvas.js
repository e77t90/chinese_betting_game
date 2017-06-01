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
dice1_image.src = 'img/b1.png';
dice2_image = new Image();
dice2_image.src = 'img/b2.png';
dice3_image = new Image();
dice3_image.src = 'img/b3.png';
diceArray = [dice1_image, dice2_image, dice3_image];

make_base();
make_dice();

function make_base()
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

  //draw play button
  context.fillStyle = "#f44336";
  context.fillRect(height*3/4, height*5/6, height/4, height/3);
  context.fillStyle = "black";
  context.font = "6vh 微軟正黑體";
  context.fillText("下注", height*3/4 + height/16, height*11/12 + height/45); 

  //draw the undo button
  context.fillStyle = "#00bcd4";
  context.fillRect(0, 0, height/7, height/8);
  context.fillStyle = "black";
  context.font = "3.5vh 微軟正黑體";
  context.fillText("重設", 0 + height/40, height/8 - height/23, height/8, height/12); 

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
    context.drawImage(bowl_image, height/4, 0, height/2, height/5);
  };
  dice1_image.onload = function(){
    context.drawImage(dice1_image, height/2 - dice_width/2, (height/6 - dice_width)/2, dice_width, dice_width);
  };
  dice2_image.onload = function(){
    context.drawImage(dice2_image, height/2 - (height/4 - dice_width*3/2) - dice_width, (height/6 - dice_width)/2, dice_width, dice_width);
  };
  dice3_image.onload = function(){
    context.drawImage(dice3_image, height/2 + (height/4 - dice_width*3/2), (height/6 - dice_width)/2, dice_width, dice_width);
  };

}

//document.getElementById('keyPart').style.width = "100px";

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

