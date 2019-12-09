"use strict";

// problem 2
//Create a while loop that uses console.log() to create the output shown below.
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

// var i = 1;
//
// while (i < 65536) {
//     i = i * 2;
//     console.log(i);
//
// }




//************************************************************************************************************************
//problem 3
//An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell.
// Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is how you get the random numbers.
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

// 5 cones sold...  // if there are enough cones
//     Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//     Yay! I sold them all! // If there are no more cones




//mine. doesnt stop selling at 0
// do {
//     // This expression will generate a random number between 1 and 5
//     var numberCones = Math.floor(Math.random() * 5) + 1;
//     var allCones = allCones - numberCones;
//     console.log(numberCones + " cones sold!");
//     console.log(allCones);
//     if(allCones < numberCones){
//         console.log('I cannot sell you ' + numberCones + " cones. I only have " + allCones + ".");
//     }
// } while (allCones > 0);
// console.log("Yay! I sold all the cones!");


//lecture run through
//1. generate total amount of cones - happens one time = allCones
//2. customer wants to buy x amount of cones = conesPurchased
//3. check to see if you have x amount of cones available
//4. if not (sad path) = sorryMessage
//5. if we do have enough cones (happy path) = happyConesMessage
//6. subtract amount of cones sold from allCones
//7. repeat until no cones are left = while allCones > 0

// do{
//     //this is cones purchased by customer
//     var conesPurchased = Math.floor(Math.random() * 5) + 1;
//
//     //sad path
//     if(conesPurchased > allCones){
//         console.log('Sorry! I cannot sell you ' + conesPurchased + " cones. I only have " + allCones + " available.")
//     }
//     //happy path
//     else {
//         allCones -= conesPurchased;
//         console.log(conesPurchased + " cones sold... " + allCones + " cones are left.")
//     }
// } while (allCones > 0);
// console.log("Yay! I sold all the cones!");