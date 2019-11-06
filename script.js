//write first method
function sleep_in(weekday, vacation) {
    if(vacation == true){
        return true;
    }
    if(weekday == true){
        return false;
    }
    if(weekday == false && vacation == false){
        return true;
    }
}

//write second method
function monkey_trouble(a_smile, b_smile) {
    if(a_smile == b_smile){
        return true;
    }else{
        return false;
    }
}

//add 2-10 below here...

function string_times(text, int){
    var newText = "";
    for(var n = 0; n < int; n++){
        newText = newText + text;
    }
    return newText;
}


function front_times(text, int){
    text = text.substring(0, 3);
    var newText = "";
    for(var n = 0; n < int; n++){
        newText = newText + text;
    }
    return newText
}


function string_bits(text) {
    var newText = "";
    for (var n = 0; n < text.length; n++){
        if (n % 2 == 1) {
            newText = newText + text.substring(n - 1, n);
        }
    }
    return newText;
}


function caughtSpeeding (speed, birthday) {
    if (birthday == false) {
        if (speed >= 81) {
            return 2;
        }
        if (speed <= 60) {
            return 0;
        }
        if (speed <= 80 && speed >= 61) {
            return 1;
        }
    }
    if (birthday == true) {
        if (speed >= 86) {
            return 2;
        }
        if (speed <= 65) {
            return 0;
        }
        if (speed <= 85 && speed >= 65) {
            return 1;
        }
    }
}


function fizz_buzz(num){
    if(num % 3 == 0 && num % 5 == 0) {
        return "FizzBuzz";
    }
    if(num % 3 == 0){
        return "Fizz";
    }
    if(num % 5 == 0){
        return "Buzz";
    }
    return num + "!";
}


function teaParty(tea, candy){
    if(tea < 5 || candy < 5){
        return 0;
    }
    if(tea >= 2 * candy || candy >= 2 * tea){
        return 2;
    }
    if(tea >= 5 && candy >= 5){
        return 1;
    }
}

function blackjack(intOne, intTwo){
    if(intOne > intTwo && intOne <= 21){
        return intOne;
    }
    if(intTwo > intOne && intTwo <= 21){
        return intTwo;
    }
    if(intOne > 21 && intTwo > 21){
        return 0;
    }
    if(intOne > 21 && intOne > intTwo){
        return intTwo;
    }
    if(intTwo > 21 && intTwo > intOne){
        return intOne;
    }
}

function loneSum(a, b, c){
    if(a == b && b != c){
        return c;
    }
    if(a == c && c!= b){
        return b;
    }
    if(b == c && c != a){
        return a;
    }
    if(a == b && b == c){
        return 0;
    }
    return a + b + c;
}
//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    //test third method, etc
}
