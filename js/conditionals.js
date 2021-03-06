"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
// confirm("Would you like to enter a number? Confirm 'OK' to enter a number, or confirm 'Cancel' to cancel.");
// var inputNumber = prompt("Please enter a number below.");


// if(isNaN(inputNumber)) {
//     alert("'" + inputNumber + "' is not a number.");
//     // var inputNumber = prompt("Please enter a number below.");
// } else {
//         if (inputNumber % 2 === 0) {
//             alert(inputNumber + " is an even number.");
//         } else {
//             alert(inputNumber + " is an odd number.");
//         }
//
//         var plus100 = (Number(inputNumber) + 100);
//         alert(inputNumber + " plus 100 is " + plus100 + ".");
//
//         if(inputNumber > 0) {
//             alert(inputNumber + " is a positive number.");
//         } else if(inputNumber < 0) {
//             alert(inputNumber + " is a negative number.");
//         } else {
//             alert(inputNumber + " is zero.")
//         }
// }

/* ########################################################################## */
//####################################################################################################################
/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

// function analyzeColor(strColor) {
//     var colorMessage;
//
//     if (strColor === "red") {
//         return colorMessage = "The color is red.";
//     } else if (strColor === "orange") {
//         return colorMessage = "The color is orange.";
//     } else if (strColor === "yellow") {
//         return colorMessage = "The color is yellow.";
//     } else if (strColor === "green") {
//         return colorMessage = "The color is green.";
//     } else if (strColor === "blue") {
//         return colorMessage = "The color is blue.";
//     } else if (strColor === "indigo") {
//         return colorMessage = "The color is indigo.";
//     } else if (strColor === "violet") {
//         return colorMessage = "The color is violet.";
//     }
// }
// console.log(analyzeColor(randomColor));


//####################################################################################################################
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */


// console.log(analyzeColor(randomColor));
//already completed above


//####################################################################################################################
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */


// function analyzeColor(strColor) {
//     var colorMessage;
//
//     switch(strColor) {
//         case "red":
//             colorMessage = "The color is red.";
//             break;
//         case "orange":
//             colorMessage = "The color is orange.";
//             break;
//         case "yellow":
//             colorMessage = "The color is yellow.";
//             break;
//         case "green":
//             colorMessage = "The color is green.";
//             break;
//         case "blue":
//             colorMessage = "The color is blue.";
//             break;
//         case "indigo":
//             colorMessage = "The color is indigo.";
//             break;
//         case "violet":
//             colorMessage = "The color is violet.";
//             break;
//     }
//     return colorMessage;
// }
// console.log(analyzeColor(randomColor));


//####################################################################################################################
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */


// function analyzeColor(strColor) {
//     var colorMessage;
//
//     switch(strColor) {
//         case "red":
//             colorMessage = "The color is red.";
//             break;
//         case "orange":
//             colorMessage = "The color is orange.";
//             break;
//         case "yellow":
//             colorMessage = "The color is yellow.";
//             break;
//         case "green":
//             colorMessage = "The color is green.";
//             break;
//         case "blue":
//             colorMessage = "The color is blue.";
//             break;
//         case "indigo":
//             colorMessage = "The color is indigo.";
//             break;
//         case "violet":
//             colorMessage = "The color is violet.";
//             break;
//         default:
//             colorMessage = "A different value/color was provided."
//     }
//     return colorMessage;
// }
//
// var inputColor = prompt("Please enter a color below.");
// console.log(analyzeColor(inputColor));
// alert(inputColor + " is a nice color!");


/* ########################################################################## */
//####################################################################################################################
/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5.
 * If your lucky number is 0 you have no discount,
 * if your lucky number is 1 you'll get a 10% discount,
 * if it's 2, the discount is 25%,
 * if it's 3, 35%,
 * if it's 4, 50%,
 * and if it's 5 you'll get all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

//  function calculateTotal(luckyNumber, originalPrice) {
//      var discountPrice;
//
//      switch(luckyNumber) {
//          case 0:
//              discountPrice = originalPrice;
//              break;
//          case 1:
//              discountPrice = originalPrice - (originalPrice * .1);
//              break;
//          case 2:
//              discountPrice = originalPrice - (originalPrice * .2);
//              break;
//          case 3:
//              discountPrice = originalPrice - (originalPrice * .3);
//              break;
//          case 4:
//              discountPrice = originalPrice - (originalPrice * .4);
//              break;
//          case 5:
//              discountPrice = originalPrice - (originalPrice * .5);
//              break;
//      }
//      return discountPrice;
// }
// console.log(calculateTotal(0, 100));
// console.log(calculateTotal(1, 100));
// console.log(calculateTotal(2, 100));
// console.log(calculateTotal(3, 100));
// console.log(calculateTotal(4, 100));
// console.log(calculateTotal(5, 100));
// console.log(calculateTotal(6, 100)); //undefined expected


//####################################################################################################################
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

function calculateTotal(luckyNumber, originalPrice) {
    var discountPrice;

    switch (luckyNumber) {
        case 0:
            discountPrice = originalPrice;
            break;
        case 1:
            discountPrice = originalPrice - (originalPrice * .1);
            break;
        case 2:
            discountPrice = originalPrice - (originalPrice * .2);
            break;
        case 3:
            discountPrice = originalPrice - (originalPrice * .3);
            break;
        case 4:
            discountPrice = originalPrice - (originalPrice * .4);
            break;
        case 5:
            discountPrice = originalPrice - (originalPrice * .5);
            break;
        case 6:
            discountPrice = originalPrice - (originalPrice * .6);
            break;
    }
    return discountPrice;
}

var inputBillTotal = Number(prompt("Hi! What was your bill total?"));

var discountedPrice = calculateTotal(luckyNumber, inputBillTotal);

alert("Your lucky number is " + luckyNumber + ".");
alert("Your price before discount was $" + inputBillTotal.toFixed(2) + ".");
alert("Your price is now $" + discountedPrice.toFixed(2) + " with your discount!");
