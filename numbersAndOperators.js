/*Practicing Numbers and Operators in Javascript*/

// In javascript, every number is a floating point 

var sum = 10 + 15;
var sub = 15 - 10;
var mul = 10 * 3;
var div = 10 / 3;
var mod = 10 % 3;

var msg = "10 / 3 = 3 with a remainder of " + mod;

var result = 10 * (5 + 3) - 4;


var myAccountBalance = 500;
var purchase = "500";

if (myAccountBalance < purchase){
    console.log("You are broke buddy!");
}
else if(myAccountBalance > purchase){
    console.log("You can buy the item!");
}
else if(myAccountBalance === purchase){
    console.log("Your money is exact!")
}
else if(myAccountBalance == purchase){
    console.log("The value is the same but the type may or may not be the same");
}

console.log(result);
