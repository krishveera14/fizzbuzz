import {userID} from "./loginPage.js"

let score = loginPage.responseScore;
let username = userID;

document.getElementById("welcomeMessage").innerHTML = "Welcome," + username;
 
function increment(){
    score++;
    //console.log(score);
    let outputValue = FizzBuzz(score);
    document.getElementById("output").innerHTML = outputValue;
}
 
function FizzBuzz(score){
    if(score%3 == 0 && score%5 == 0){
        // return "FizzBuzz";
        return "FizzBuzz";
    }
    else if(score%3 == 0){
        return "Fizz";
    }
    else if(score%5 == 0){
        return "Buzz";
    }
    else{
        return score;
    }
}
