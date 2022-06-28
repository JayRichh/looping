"use strict";
/* 
? Learning JavaScript functions and loops 
!  Contents:
*  1. Countdown 
*  2. Loops
*  3. Arrays
*  4. Objects
*  5. Conditional statements
*  6. Functions and arrays
*  7. Functions and objects
*  8. Functions and conditional statements
*  9. Functions and loops
*  10. Functions and arrays
*/

// * Countdown * //

const countdown = [
  // countdown array
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "Liftoff!",
];

function countdownDisplay() {
  for (let i = 0; i < countdown.length; i++) {
    setTimeout(function () {
      console.log(countdown[i]);
      document.getElementById("countdown").innerHTML = countdown[i];
      return countdown[i];
    }, 1000 * i);
  }
}

function celebrate() { 
    setTimeout(function () { 
        document.getElementById("yee").innerHTML = "Yee Boi!";  
        initConfetti();
        render();
}, 10000);  
}

//! Old code attempts to integrate celebration into the countdown
/*
var output = document.getElementById("countdown");
function celebrate() { 
    if (document.getElementById.innerHTML == "Liftoff!") {    // if the countdown is done, celebrate
        document.getElementById("yee").innerHTML = "Yee Boi";
        initConfetti()
        resizeBy()
    } else {
        document.getElementById("yee").innerHTML = "";
    }
}
// call celebrate function
const yee = document.querySelector("#yee");
addEventListener.
if 

function countdownDisplay() {
  if (countdown[10] === "Liftoff!") {
    document.querySelector("#yee").innerHTML = "NICE JOB!";
  } else {
    for (let i = 0; i < countdown.length; i++) {
      setTimeout(function () {
        document.querySelector("#countdown").innerHTML = countdown[i];
        return countdown[i];
      }, 1000 * i);
    }
  }
} 
*/

// *  * //