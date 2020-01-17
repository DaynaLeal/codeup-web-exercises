"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//2 Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let threeOrMoreLanguages = users.filter(user => (user.languages).length >= 3);
console.log(threeOrMoreLanguages);






//3 Use .map to create an array of strings where each element is a user's email address
let userEmails = users.map(user => user.email);
console.log(userEmails);






//4  Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let totalYearsExperience = users.reduce((total, user) => {
    return ((total + user.yearsOfExperience)); //35
}, 0);
console.log(totalYearsExperience / users.length);  //(35 / 5) = 7




//5  Use .reduce to get the longest email from the list of users.
//my attempt below
// let longestEmail = users.reduce((total, user) => {
//     return total += user.email
// }, [ ]);
// console.log(longestEmail);

//daniels run-through answer below
let longestEmail = users.reduce((longestSoFar, user) => {
    if(user.email.length > longestSoFar.length){
        return user.email;
    } else {
        return longestSoFar;
    }
}, '');
console.log(longestEmail);





//6  Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
//mine below
let instructorString = users.reduce((total, user) => {
    total += `${user.name} `;
    return total;
}, ` `);
console.log(instructorString);
//daniels run-through answer below
let greeting = users.reduce((runningGreeting, user) => {
   return runningGreeting += user.name + ', '
}, 'Your instructors are: ');
greeting = greeting.substring(0, greeting.length-2) + '.';
console.log(greeting);