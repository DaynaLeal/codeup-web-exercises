"use strict";

//problem1 mine
// function showMultiplicationTable(input){
//     console.log(input * 1);
//     console.log(input * 2);
//     console.log(input * 3);
//     console.log(input * 4);
//     console.log(input * 5);
//     console.log(input * 6);
//     console.log(input * 7);
//     console.log(input * 8);
//     console.log(input * 9);
//     console.log(input * 10);
// }
// console.log(showMultiplicationTable(7));

// problem1 run through
// function showMultiplicationTable(input){
//     for (var i = 1; i <= 10; i++){
//         var answer = input * i;
//         console.log(input + " x " + i + " = " + answer);
//     }
// }
// console.log(showMultiplicationTable(7));


//************************************************************************************************************************
//problem2
// for (var i = 1; i <= 10; i++) {
//     var number = Math.floor(Math.random() * 200) + 20;
//     console.log('for loop iteration #' + i);
//     if(number % 2 === 0) {
//         console.log(number + " is even");
//     } else {
//         console.log(number + " is odd");
//     }
//
// }

//run through
// for (var i = 1; i <= 10; i++){
//     var randomNumber = Math.floor(Math.random() * 180) + 20;
//     if(randomNumber % 2 === 0){
//         console.log(randomNumber + " is even");
//     } else {
//         console.log(randomNumber + " is odd");
//     }
// }

//************************************************************************************************************************
//problem3 incomplete
// for (var i = 1; i < 10; i++){
//     console.log(i)
// }

//run through solution
// for(var i = 1; i < 10; i++) {
//     console.log(i.toString().repeat(i));
// }

//see europa web exercises for a second solution with loop within a loop

//************************************************************************************************************************
//problem4
// for (var i = 100; i >= 5; i--){
//     console.log(i);
//     i =- 5;
// }

//run though
// for(var i = 100; i >= 5; i-=5){
//     console.log(i);
// }

