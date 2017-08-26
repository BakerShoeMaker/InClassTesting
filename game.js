/**
 * Created by davidhollaway on 8/24/17.
 */

//user variables
var userR;
var userS;
var userP;
var userAnswer;

//Computer variables
var compR;
var compS;
var compP;
var computerAnswer;

//array of answers
var computerArray = [r,s,p];


//START: User inputs answer
//Enter r, s, p

//Computer generates answer
computerAnswer = math.random(computerArray.length);




//Computer outputs evaluate of answers
//Will generate "win"
if(userAnswer == "r" && computerAnswer == "s")
{
    console.log("You win");
}
if(userAnswer == "s" && computerAnswer == "p")
{
    console.log("You win");
}
if(userAnswer == "p" && computerAnswer == "s")
{
    console.log("You win");
}

//Will generate "lose"
if(userAnswer == "r" && computerAnswer == "p")
{
    console.log("You lose");
}
if(userAnswer == "s" && computerAnswer == "r")
{
    console.log("You lose");
}
if(userAnswer == "r" && computerAnswer == "p")
{
    console.log("You lose");
}


//Computer outputs results



//Game starts over


