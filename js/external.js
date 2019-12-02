"use strict";

console.log("Hello from external JavaScript");








//exercise 2:

alert("Welcome to my Website!");

var usersFavColor = prompt("What is your favorite color?");

alert("Woah, " + usersFavColor + " is my favorite color too!");

// if (usersFavColor === "blue") {
    // alert("Blue used to be my favorite color, but I like pink more now.");
// }
//
// if (usersFavColor === "pink") {
//         alert("Woah, " + usersFavColor + " is my favorite color too!")
// } else {
//     alert(usersFavColor + " is a nice color. But my favorite color is pink!");
// }







//exercise 3
// Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
//     When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
//     Use an alert to show the results of each problem.


//3.1
alert("You want to rent some movies for your kids: The little mermaid, Brother Bear (they love it!), and Hercules (you don't know yet if they're going to like it). The price per movie rental per day is $3. Let's see how much you will need to pay.");
var littleMermaid = prompt("How many nights do you want to rent The Little Mermaid?");
var brotherBear = prompt("How many nights do you want to rent Brother Bear?");
var herculesMovie = prompt("How many nights do you want to rent Hercules?");
var movieRentals = (3 * littleMermaid) + (3 * brotherBear) + (3 * herculesMovie);
alert("You will have to pay $" + movieRentals + ".");
console.log(movieRentals);

//below is based on what I originally thought this question was asking:
// if (userAnswerRentals === 27 || "$27" || "$27.00") {
//     alert("You're Correct! You would have to pay $27 for your movie rentals.");





//3.2

alert("You're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. Let's determine how much you made based on the amount of hours you worked this week.");
var googleHours = prompt("How many hours did you work for Google this week?");
var amazonHours = prompt("How many hours did you work for Amazon this week?");
var facebookHours = prompt("How many hours did you work for Amazon this week?");
var totalPay = (400 * googleHours) + (380 * amazonHours) + (350 * facebookHours);
alert("You would be paid $" + totalPay + " for your work this week!" );
console.log(totalPay);
//below is based on what I originally thought this question was asking:
// function weeklyPay(googleHours, amazonHours, facebookHours) {
//     return (400 * googleHours) + (380 * amazonHours) + (350 * facebookHours);
// }
// console.log(weeklyPay(6, 4, 10)); //returns 7420
//
// var userAnswerPay = prompt("Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.");
// if (userAnswerPay === 7420 || "$7420" || "$7,420" || "$7420.00" || "$7,420.00") {
//     alert("You're Correct! You would be paid $7,420 for your work.")
// }

// 3.3
//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
var classAt8AM = false;
var classSize = 125;
var currentClassSize = 108;
var canEnroll = (currentClassSize < classSize) && !classAt8AM; //returns true


//3.4
//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
var hasRewards = true;
var cartSize = 6;
var offerValid = true;
var getsDiscount = offerValid && (hasRewards || cartSize > 2); //returns true