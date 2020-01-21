"use strict";

//Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
// function wait(inputNumber) {
//     return new Promise(((resolve, reject) => {
//         setTimeout(() => {
//             resolve('resolved'); //didnt need 'resolved'
//
//         }, inputNumber)
//     }))
// }
//walk-through
const wait = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, num)
    })

}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

//Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.
// fetch('https://api.github.com/users/:username/events', {headers: {'Authorization': gitAccessToken}});

function lastCommit(userName){
    return new Promise(((resolve, reject) => {
        resolve (fetch('https://api.github.com/users/:' + userName + '/events', {headers:
                {'Accept': 'application/vnd.github.v3+json'},
                {'Authorization': 'token gitAccessToken'}}))
    }))
}
lastCommit('DaynaLeal');




//from curriculum:
// function makeRequest() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.1) {
//                 resolve('Here is your data: ...');
//             } else {
//                 reject('Network Connection Error!');
//             }
//         }, 1500);
//     });
// }
//
// const request = makeRequest();
// console.log(request); // pending promise
// request.then(data => console.log('Promise resolved!', data));
// // if resolved, will log "Promise resolved!" and "Here is your data: ..."
// request.catch(error => console.log('Promise rejected!', error));
// // if rejected, will log "Promise rejected!" and "Network Connection Error!"
