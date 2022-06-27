"use strict";

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

for (let i = 0; i < countdown.length; i++) {
    // loop through the array

    setTimeout(function () {
        // setTimeout is a function that takes a function as an argument
        console.log(countdown[i]);
        document.getElementById("countdown").innerHTML = countdown[i]; // display the countdown
    }, 1000 * i); // wait 1 second for each iteration
}
