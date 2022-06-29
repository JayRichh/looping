"use strict";

/* 
? Learning JavaScript functions and loops!
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
    return celebrate();
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

// * Add array item * //

const myArray = ["tomatoes", "chick peas", "onions", "rice", "black beans"];
const listArray = document.createElement("ul");
const listOutput = document.querySelector("#listOutput");

function listItems() {
  if (listOutput.childElementCount === 0) {
    // if listOutput is empty, add list items
    for (let i = 0; i < myArray.length; i++) {
      // for loop to display list items
      let listItem = document.createElement("li"); // create list item
      listItem.textContent = myArray[i]; // add list item text
      listArray.appendChild(listItem); // add list item to listx
    }
    listOutput.appendChild(listArray); // add list to HTML
    return listArray;
  }
}

// * Search Array * //

/* Write a simple program that, given a name, searches an array of objects containing names and phone 
numbers (phonebook) and, if it finds the name, outputs the name and phone 
number into the paragraph (para) and then exits the loop before it has run its course.  */

const input = document.querySelector("#input");
const para = document.querySelector("#para");
const phonebook = [
  { name: "John", phone: "555-5555" },
  { name: "Jane", phone: "555-5555" },
  { name: "Bob", phone: "555-5555" },
  { name: "Mary", phone: "555-5555" },
  { name: "Joe", phone: "555-5555" },
  { name: "Jill", phone: "555-5555" },
  { name: "Bill", phone: "555-5555" },
  { name: "Juan", phone: "555-5555" },
  { name: "Shpang", phone: "555-5555" },
  { name: "Chris", phone: "555-5555" },
  { name: "Colin", phone: "555-5555" },
  { name: "Lola", phone: "555-5555" },
  { name: "Phil", phone: "555-5555" },
  { name: "Jenny", phone: "555-5555" },
];

function searchPhonebook() {
  let search = input.value; // get value from input
  function capitalizeFirstLetter(search) {
    // capitalize first letter of search function
    return search.charAt(0).toUpperCase() + search.slice(1); // capitalize first letter of search string
  }
  search = capitalizeFirstLetter(search); // capitalize first letter of search
  for (let i = 0; i < phonebook.length; i++) {
    // for loop to search phonebook

    if (search === phonebook[i].name) {
      // if search is equal to name in phonebook
      para.textContent = phonebook[i].name + ": " + phonebook[i].phone; // display name and phone number
      break; // break loop
    } else {
      para.textContent = "No match found."; // if no match found, display message
    }
  }
}

// * Prime Numbers * //

let i = 500;
let paragraph = document.querySelector("#paragraph"); 
let prime = document.querySelector("#prime");

//function to loop through numbers 2 to 500 backwards and run isPrime function on them.
function loopNumbers() {
  for (let i = 500; i >= 2; i--) {
    // for loop to loop through numbers 2 to 500
    if (isPrime(i)) {
      // if number is prime, display number
      paragraph.textContent += i + ", ";
    }
  }
  //remove last comma from paragraph text & add period
  paragraph.textContent = paragraph.textContent.slice(0, -2); // remove last comma
  paragraph.textContent += "."; // add period
  celebrate(); // celebrate
}
function isPrime() {
  // function to check if number is prime
  for (let i = 2; i < this; i++) {
    // for loop to check if number is prime
    if (this % i === 0) {
      // if number is divisible by i, return false
      return false;
    }
  }
  return true; // if number is not divisible by i, return true
}

