"use strict";

console.log("Hello from external JavaScript");








//exercise 2:

alert("Welcome to my Website!");

var usersFavColor = prompt("What is your favorite color?");

alert("Woah, " + usersFavColor + " is my favorite color too!");


//below were extra practice
// if (usersFavColor === "blue") {
//     alert("Blue used to be my favorite color, but I like pink more now.");
// } else if (usersFavColor === "pink") {
//         alert("Woah, " + usersFavColor + " is my favorite color too!")
// } else {
//     alert(usersFavColor + " is a nice color. But my favorite color is pink!");
// }







//exercise 3
// Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
//     When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
//     Use an alert to show the results of each problem.


//3.1
alert("You want to rent some movies for your kids: The little mermaid, Brother Bear (they love it!), and Hercules (you don't know yet if they're going to like it). Let's see how much you will need to pay.");
var rentalPrice = Number(prompt("How much does each daily rental cost?"));
var littleMermaid = Number(prompt("How many nights do you want to rent The Little Mermaid?"));
var brotherBear = Number(prompt("How many nights do you want to rent Brother Bear?"));
var herculesMovie = Number(prompt("How many nights do you want to rent Hercules?"));
var movieRentals = (rentalPrice * littleMermaid) + (rentalPrice * brotherBear) + (rentalPrice * herculesMovie);
alert("You will have to pay $" + movieRentals + ".");
console.log("user wants to rent The Little Mermaid for " + littleMermaid + " days.");
console.log("user wants to rent Brother Bear for " + brotherBear + " days.");
console.log("user wants to rent Hercules for " + herculesMovie + " days.");
console.log("user will pay $" + movieRentals + ".");

//below is based on what I originally thought this question was asking:
// if (userAnswerRentals === 27 || "$27" || "$27.00") {
//     alert("You're Correct! You would have to pay $27 for your movie rentals.");





//3.2

alert("You're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. Let's determine how much you made based on the amount of hours you worked this week.");
var googleHours = Number(prompt("How many hours did you work for Google this week?"));
var amazonHours = Number(prompt("How many hours did you work for Amazon this week?"));
var facebookHours = Number(prompt("How many hours did you work for Amazon this week?"));
var totalPay = (400 * googleHours) + (380 * amazonHours) + (350 * facebookHours);
alert("You would be paid $" + totalPay + " for your work this week!" );
console.log("user worked for Google for " + googleHours + " hours.");
console.log("user worked for Amazon for " + amazonHours + " hours.");
console.log("user worked for Facebook for " + facebookHours + " hours.");
console.log("user will be paid $" + totalPay + ".");







// 3.3
//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
alert("You can enroll in a class only if the class is not full and your class schedule does not conflict with your current schedule. Let's see if you will be able to enroll in this class.");
var classAt8AM = prompt("Do you have class at 8 a.m.?");
    console.log("Student has class at 8 a.m.: " + classAt8AM);
alert("The class is full if there are 125 students already enrolled.");
var maxclassSize = 125;
var currentClassSize = Number(prompt("How many students are currently enrolled?"));
    console.log("There are " + currentClassSize + " students already enrolled.");
// var canEnroll = (currentClassSize < classSize) && !classAt8AM; //returns true
    var canEnroll = (currentClassSize < maxclassSize) && (classAt8AM.toLowerCase() === "no");
    console.log("The student can enroll in the course: " + canEnroll);
    if (canEnroll === true) {
    (alert("You can enroll in the course!"));
} else {
    (alert("You cannot enroll in this course at this time."));
}






//3.4
//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
alert("This coupon may be applied if you are buying more than 2 items and if the offer has not expired. You may also use this coupon if you are a Premium Member.")
var hasRewards = confirm("Confirm 'okay' if you are a Premium Member or 'cancel' if you are not.");
    console.log("Premium Member: " + hasRewards);
var cartSize = prompt("How many items are you purchasing?");
    console.log("Items to be purchased: " + cartSize);
var offerValid = confirm("Confirm 'okay' if the coupon has not expired and 'cancel' if it has not expired.");
    console.log("Offer is still valid: " + offerValid);
var getsDiscount = offerValid && (hasRewards || cartSize > 2);
if (getsDiscount === true) {
    alert("The coupon has been applied!");
} else {
    alert("The coupon cannot be applied at this time.");
}
if (hasRewards === false) {
    confirm("Confirm 'okay' to become a Premium Member or 'cancel' to cancel.")
}
    console.log("Customer was able to apply coupon: " + getsDiscount);