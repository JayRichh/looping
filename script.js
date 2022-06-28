"use strict";

/* 
? Learning JavaScript functions and loops 
!  Contents:
*  0. Music
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

// * Music * //
// ? How to change volume in JavaScript for video player, not important just yet
/*
var video = document.getElementById("youtubePlayer");
function volumeChange() {
  video.volume = volume.value;
}
volumeChange();
video = 0.2;
*/

// * Countdown * //

let countdown = [
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

// * Guest List Filling In Functions * //

const admitted = document.querySelector("#admitted");
const denied = document.querySelector("#denied");
const letsgo = document.querySelector("#letsgo");
admitted.textContent = "Admitted: ";
denied.textContent = "Denied: ";

// TODO: add function to change colors of window
// * Cracked it ye boi * //

function list() {
  let guestList = [
    // guest list array
    "John",
    "Jane",
    "Bob",
    "Mary",
    "Joe",
    "Jill",
    "Bill",
    "Juan",
    "Shpang",
    "Chris",
    "Colin",
    "Lola",
    "Phil",
    "Jenny",
  ];

  let admittedList = [];
  let deniedList = [];

  let admitted = document.querySelector("#admitted");
  let denied = document.querySelector("#denied");

  admitted.textContent = "Admitted: ";
  denied.textContent = "Denied: ";

  let i = 0;

  do {
    // do while loop
    let random = Math.floor(Math.random() * guestList.length); // random number generator
    if (guestList[random] === "John" || guestList[random] === "Jane") {
      // if the guest is John or Jane, add to admitted list
      deniedList.push(guestList[random]); // add to denied list
      guestList.splice(random, 1); // remove from guest list
    } else {
      admittedList.push(guestList[random]); // add guest to admitted list
      guestList.splice(random, 1); // remove guest from guest list
    }
  } while (i < guestList.length); // (while guestList is not empty)

  for (let i = 0; i < admittedList.length; i++) {
    // for loop to display admitted guests
    admitted.textContent += admittedList[i] + ", "; // display admitted guests\
  }
  for (let i = 0; i < deniedList.length; i++) {
    // for loop to display denied guests
    denied.textContent += deniedList[i] + ", "; // display denied guests
  }
  admitted.textContent = admitted.textContent.slice(0, -2); // remove last comma
  admitted.textContent += "."; // add period
  denied.textContent = denied.textContent.slice(0, -2); // remove last comma
  denied.textContent += "."; // add period
}

const button = document.querySelector("#btn");
const colorWindow = document.querySelector(".left");

function randomBackground() {
  function randomColorGenerator() {
    // random color generator
    let r = Math.floor(Math.random() * 256); // random number generator
    let g = Math.floor(Math.random() * 256); // random number generator
    let b = Math.floor(Math.random() * 256); // random number generator
    let color = "rgb(" + r + ", " + g + ", " + b + ")"; // color generator
    return color;
  }
  colorWindow.style.backgroundColor = randomColorGenerator(); // change color of window
}
