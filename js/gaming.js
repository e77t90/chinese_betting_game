$(document).ready(function(){
  init();
});

//initial setup function
function init() {
  loadBGMid();
  loadBGTop();
  loadBGBottom();
  
  requestServerKey();
  update_bank();
  document.addEventListener('click', mouseClicked, false);
  //document.addEventListener('mouseDown', mouseDown, false);
}

//update function
function update_bank(){
  loadBGTop();
};

function update_dice(){
  
  for (var i=0; i<3; i++) {
    switch (game.randNumber[i]) {
      case 1:
        diceArray[i].src = 'img/dice_1.png'
        break;
      case 2:
        diceArray[i].src = 'img/dice_2.png'
        break;
      case 3:
        diceArray[i].src = 'img/dice_3.png'
        break;
      case 4:
        diceArray[i].src = 'img/dice_4.png'
        break;
      case 5:
        diceArray[i].src = 'img/dice_5.png'
        break;
      case 6:
        diceArray[i].src = 'img/dice_6.png'
        break;
      default:
        break;
    }
  }

  make_dice();
}

function refreshCanvas() {
  
  loadBGMid();
  loadBGTop();
}

/*

$(document).ready(function(){
  requestServerKey();
  $('#submit').on('click', gameStart);
  $('#submit').on('click', requestServerKey);
});

*/

var response = {};
response.result = [];
var input_numberGuess = [];
var totalBet = 0;

var hashedServerKey = null;

var game = {
  //bet: null,
  bank: 500,
  randNumber: [],
  numberGuess: [],
  //numberGuessForTwo: [],

  /*
  getBetAmount: function() {
    return this.bet = input_bet;
  },*/
  getRandomNumber: function(input, server_seed) {
    return this.randNumber = genRandNumber(input, server_seed);
  },
  getNumberGuess: function() {
    return this.numberGuess = input_numberGuess;
  },

};

function gameStart() {

  var input = null;
  if($('#clientSeed').val() === ""){
    input = makeRandomText();
    $('#clientSeed').val(input); 
  }
  else{
    input = $('#clientSeed').val();
  }
  console.log(input);

  requestUnhashedKey(input);
};


//Event functions:

//@return return array of random 3 numbers from user input and server seed
function genRandNumber(input, server_seed) {
  var returnArray = [];
  for (var nonce = 0; nonce < 3; nonce++)
  {
    var client_seed = input + "-" + nonce;

    //for rolling random number from 1~6
    var roll = CryptoJS.HmacSHA512(client_seed, server_seed).toString();

    var start = 0;
    var result = Math.pow(6, 6);
    while(result > Math.pow(6, 6)-1) {
      result = parseInt(roll.substring(start, start + 4), 16);
      start = start + 4;
    }
    result = (result % Math.pow(6, 4)) / Math.pow(6, 3);
    returnArray[nonce] = Math.floor(result + 1);
  }
  return returnArray;
}

function requestServerKey() {

  $.ajax({
    url: 'receive.php',
    type: 'POST',
    data: {action: 0},
    success: function(response) {
      $('#hashed_this_game').text(response);
      hashedServerKey = response;
    },
    dataType: "text"
  });


}

function requestUnhashedKey(input) {

  $.ajax({
    url: 'receive.php',
    type: 'POST',
    data: {action: 1},
    success: function(response) {
      console.log("requestUnhashedKey() = " + response);
      $('#unhashed_last_game').text(response);
      //changing content of hashed server key of last game
      $("#hashed_last_game").text($("#hashed_this_game").text());

      var server_seed = response;
      console.log("server seed:" + server_seed );

      //game.getBetAmount();
      game.getRandomNumber(input, server_seed);
      game.getNumberGuess();

      console.log("randNum:" + game.randNumber);
      //update the dice canvas
      update_dice();
      

      for(var j=0; j<game.numberGuess.length; j++){

        //handle guess for one numbers
        console.log("game.numberGuess[j].number = " + game.numberGuess[j].number);

        var count = 0;
        for (var i=0; i<3; i++)
        {
          console.log("game.randNumber[i] = " + game.randNumber[i]);
          if(game.randNumber[i] === game.numberGuess[j].number)
          {
            count++;
          }
        }

        if(count === 1) {
          alert("You got it! you won || 1x Price || of $" + (game.numberGuess[j].bet * 1) + " !" );
          game.bank = game.bank + game.numberGuess[j].bet + (game.numberGuess[j].bet * 1);
          console.log(game.bank);
          update_bank();
        }else if(count === 2) {
          alert("You got it! you won || 2x Price || of $" + (game.numberGuess[j].bet * 2) + " !" );
          game.bank = game.bank + game.numberGuess[j].bet + (game.numberGuess[j].bet * 2);
          console.log(game.bank);
          update_bank();
        }else if(count === 3) {
          alert("You got it! you won || 3x price || of $" + (game.numberGuess[j].bet * 3) + " !" );
          game.bank = game.bank + game.numberGuess[j].bet + (game.numberGuess[j].bet * 3);
          console.log(game.bank);
          update_bank();
        }else{
          alert("Sorry you lost!");
          console.log(game.bank);
          update_bank();
        };

      }

        input_numberGuess = [];
        //refresh the canvas
        refreshCanvas();

        if(game.bank == 0){alert("you have lost the game!");}


    },
    dataType: "text"
  });
}


function makeRandomText()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 9; i++ ) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

// End of event functions





// mouse coordinate of the screen
var mouseX = 0;
var mouseY = 0;

// button object
function Button(xL, xR, yT, yB) {
  this.xLeft = xL;
  this.xRight = xR;
  this.yTop = yT;
  this.yBottom = yB;
}

Button.prototype.checkClicked = function() {
  if (this.xLeft <= mouseX && mouseX <= this.xRight && this.yTop <= mouseY && mouseY <= this.yBottom) return true;
}

//Create button
var btnPlay = new Button(height*3/4, height, height*5/6, height);

var btn_1 = new Button(0, height/4, height/4, height/2);
var btn_2 = new Button(0, height/4, height/2, height*3/4);
var btn_3 = new Button(height/4, height/2, height/2, height*3/4);
var btn_4 = new Button(height/2, height*3/4, height/2, height*3/4);
var btn_5 = new Button(height*3/4, height, height/2, height*3/4);
var btn_6 = new Button(height*3/4, height, height/4, height/2);
var btn_Array = [btn_1, btn_2, btn_3, btn_4, btn_5, btn_6];

var btnReset = new Button(0, height/7, 0, height/8);

var btn_coin_1 = new Button(0, height/12, height*5/6, height*5/6 + height/12);
var btn_coin_10 = new Button(height/10, height/10 + height/12, height*5/6, height*5/6 + height/12);
var btn_coin_50 = new Button(height*2/10, height*2/10 + height/12, height*5/6, height*5/6 + height/12);
var btn_coin_100 = new Button(height*3/10, height*3/10 + height/12, height*5/6, height*5/6 + height/12);
var btn_coin_500 = new Button(height*4/10, height*4/10 + height/12, height*5/6, height*5/6 + height/12);
var btn_coin_1000 = new Button(height*5/10, height*5/10 + height/12, height*5/6, height*5/6 + height/12);
var btn_coin_5000 = new Button(height*6/10, height*6/10 + height/12, height*5/6, height*5/6 + height/12);

//button action
function addCoin(mouseX, mouseY) {
  switch (currentCoin) {
    case 1:
      betCoin_image.src = 'img/1.png';
      drawBetCoin();
      break;
    case 10:
      betCoin_image.src = 'img/10.png';
      drawBetCoin();
      break;
    case 50:
      betCoin_image.src = 'img/50.png';
      drawBetCoin();
      break;
    case 100:
      betCoin_image.src = 'img/100.png';
      drawBetCoin();
      break;
    case 500:
      betCoin_image.src = 'img/500.png';
      drawBetCoin();
      break;
    case 1000:
      betCoin_image.src = 'img/1000.png';
      drawBetCoin();
      break;
    case 5000:
      betCoin_image.src = 'img/5000.png';
      drawBetCoin();
      break;
  }

}

//handle button clicked event functions
function mouseClicked(e) {
  mouseX = e.pageX - canvas.offsetLeft;
  mouseY = e.pageY - canvas.offsetTop;
  if (btnPlay.checkClicked()) {playGame()};

  btn_Array.forEach(function(item, index){

    if (item.checkClicked()) {
      if (currentCoin > game.bank) {
        alert("Bet amount cannot be larger than your bank!");
      }else {
        game.bank = game.bank - currentCoin;
        totalBet += currentCoin;
        update_bank();
        addCoin(mouseX, mouseY);
        input_numberGuess.push(
          {bet: currentCoin, number: index+1}
        );
        console.log(JSON.stringify(input_numberGuess));
      }
    };

  });

  if (btnReset.checkClicked()) {
    refreshCanvas();
    game.bank += totalBet;
    update_bank();
    totalBet = 0;
    input_numberGuess = [];
  };

  if (btn_coin_1.checkClicked()) {currentCoin = 1;};
  if (btn_coin_10.checkClicked()) {currentCoin = 10;};
  if (btn_coin_50.checkClicked()) {currentCoin = 50;};
  if (btn_coin_100.checkClicked()) {currentCoin = 100;};
  if (btn_coin_500.checkClicked()) {currentCoin = 500;};
  if (btn_coin_1000.checkClicked()) {currentCoin = 1000;};
  if (btn_coin_5000.checkClicked()) {currentCoin = 5000;};
  
}

//action preformed when "下注" is pressed
function playGame() {
  gameStart();
  totalBet = 0;
  requestServerKey();
}

