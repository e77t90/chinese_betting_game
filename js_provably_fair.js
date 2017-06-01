var response = {};
response.result = [];

var server_seed = null; //reveal later after the client have enter their client seed
var secret_hash = null;
var input = "varsad"; //user input for client key


//Do in server part
//var secret_hash = CryptoJS.SHA256(server_seed).toString();
/* This part is pretending received responses from the server
*/

server_seed = "293d5d2ddd365f54759283a8097ab2640cbe6f8864adc2b1b31e65c14c999f04";
secret_hash = "5ac59780d512265230d5efb3cc238886dc1b457a80b54fbf1f920b99c6505801";


/*stop of the pretending part
*/

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
    console.log(result);
  }
  result = (result % Math.pow(6, 4)) / Math.pow(6, 3);
  response.result[nonce] = Math.floor(result + 1);
}

//display the result of rolling 3 dice (1~6)
console.log("Rolling result is " + response.result);

/* for rolling random number from 0~100

var start = 0;
var result = 1000000;
while(result > 999999) {
  result = parseInt(roll.substring(start, start + 5), 16);
  start = start + 5;
  console.log(result);
}
response.result = (result % 10000) / 100;
*/

/* testing for rolling fairness

for (var i = 0; i < 1000; i++) {
    var random1 = Math.random().toString();
    var random2 = Math.random().toString();
    var roll = CryptoJS.HmacSHA512(random1, random2).toString();

    var start = 0;
    var result = Math.pow(6, 6);
    while(result > Math.pow(6, 6)-1) {
      result = parseInt(roll.substring(start, start + 4), 16);
      start = start + 4;
    }
    result = (result % Math.pow(6, 4)) / Math.pow(6, 3);
    response.result = Math.floor(result + 1);

    //display the result
    console.log("Rolling result is " + response.result);

}
*/
