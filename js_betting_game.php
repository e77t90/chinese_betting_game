
<html>

  <head>
    <script src="js/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="betting_game.css">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  </head>

  <body>

  <script>




  </script>
  <h2> 魚蝦蟹 </h2>

  <h2>Cash Balance: $<span id="balance"></span></h2>
  <h3>Rolling Results are: <p id="diceResult"></p></h3>
  <form>
    <label for="bet">Bet: </label>
    <input id="bet" name="bet" type="text" placeholder="投注額 ($)" />
      <br>
    <label for="guess">Guess: </label>
    <input id="guess" name="guess" type="text" placeholder="(number 1..6)" />
      <br>
    <label for="guessForTwo">Guess for first numbers: </label>
    <input id="guessForTwoA" name="guessForTwo" type="text" placeholder="(number 1..6)" />
      <br>
    <label for="guessForTwoB">Guess for second number: </label>
    <input id="guessForTwoB" name="guessForTwo" type="text" placeholder="(number 1..6)" />
      <br>
    <p>
      The hashed server key of <strong>this game</strong> is:
    </p>
    <p id="hashed_this_game">
      <?php
      /*
        $text = "";
        $possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( $i=0; $i < 9; $i++ ){
          $text = $text . $possible[rand(0,strlen($possible)-1)];
          //$text += $possible.charAt(Math.floor(Math.random() * strlen($possible)));
        }
        echo hash('sha512', $text);
      */ 
      ?>
    </p>
    <label for="clientSeed">Input for client key: </label>
    <input id="clientSeed" name="clientSeed" type="text" placeholder="input for generating result" />
      <br>
      <br>
    <div class="hidden">(2) The unhashed server key of <strong>this game</strong> is
      <p id="unhashed_this_game"></p>
    </div>
      <br>
    <div>The hashed server key of <strong>last game</strong> is:</div><p id="hashed_last_game"></p>
    <div>The unhashed server key of <strong>last game</strong> is:</div><p id="unhashed_last_game"></p>
    <div>
      <p>you can verify the server key at these website:
      </p>
      <ul>
        <li> <a href="https://www.freeformatter.com/sha512-generator.html#ad-output" target="_blank">https://www.freeformatter.com/sha512-generator.html#ad-output</a> </li>
        <li> <a href="https://caligatio.github.io/jsSHA" target="_blank">https://caligatio.github.io/jsSHA</a> </li>
        <li> <a href="https://https://1024tools.com/hmac" target="_blank">https://1024tools.com/hmac</a></li>
      </ul>
    </div>
    <input type="button" id="submit" name="submit" value="下注"/>
  </form>

  <script type="text/javascript" src="cryptojs/rollups/hmac-sha512.js"></script>
  <script type="text/javascript" src="js_betting_game.js"></script>
  <!--<script type="text/javascript" src="js_provably_fair.js"></script>-->



  </body>

</html>


