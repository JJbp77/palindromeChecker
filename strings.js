// here we're setting the value of a boolean variale
var tryAnotherLoopFlag = true;

//This the function that checks the users input is a Palindrome
function myPalindrome(){
    const userInput = document.getElementById("userInput").value.toLowerCase().replace(/[^a-z0-9]/g,"");
    const reversedInput = userInput.split("").reverse().join("");

    //Here we are providing the user feedback as too their success or not
    if(userInput === reversedInput){
        document.getElementById("result").textContent = "Congratulations " + userInput +" is a Palindrome!";
    }
    else{
        document.getElementById("result").textContent = userInput + " is not even a word, better luck next time!";
    }
}

//Does the User want to continue creating palindromes or give some else a try, if so then the function will clear the user input field
function tryAnotherLoop(){
    tryAnotherLoopFlag = true;
    document.getElementById("userInput").value = " ";
}

//This is the function that breaks the loop and posts a good bye message
function quitLoop(){
    tryAnotherLoopFlag = false;
    document.getElementById("result").textContent = "Good by for now!";
    document.getElementById("userInput").value = " ";
}

(function loop(){
    if(tryAnotherLoopFlag){
        myPalindrome();
        setTimeout(loop, 30000);
    }
})