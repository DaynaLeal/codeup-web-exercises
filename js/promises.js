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

//failed attempt to access git API
// function lastCommit(userName){
//     return new Promise(((resolve, reject) => {
//         resolve (fetch('https://api.github.com/users/:' + userName + '/events', {headers:
//                 {'Accept': 'application/vnd.github.v3+json'},
//                 {'Authorization': 'token gitAccessToken'}}))
//     }))
// }
// lastCommit('DaynaLeal');


//seemingly unrelated part of the run-through
// fetch('https://api.github.com/users')
//     .then(resp => {
//         console.log(resp);
//         return resp.json();
//     })
//     .then(user => {
//         console.log(user);
//         return users.map(user => user.login);
//     })
//     // .then(data => console.log(data))
//     // .then(users => users.map(user => user.login))
//     .then(usernames => console.log(usernames));
//     // .then(usernames => users.forEach((username) => {
//         //do something with each username
// // }))
//     // .catch(error => console.error(error))

//run-through
const lastCommit = (username) => {
    fetch(`https://api.github.com/users/${username}/events`, {headers: {"Authorization": `token ${githubPAT}`}})
        .then(resp => resp.json())
        .then(data => data.find(event => event.type === "PushEvent"))
        .then(event => event.created_at)
        .then(date => console.log(date));
};
lastCommit("danielfryar");
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
