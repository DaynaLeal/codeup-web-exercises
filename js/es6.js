/*
* Complete the TODO items below
*/
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];




// TODOne: fill in your name and email and add some programming languages you know to the languages array
// TODOne: replace the `var` keyword with `const`, then try to reassign a variable declared as `const`
const name = 'dayna';
const email = 'dayna@codeup.com';
const languages = ['html', 'css', 'javascript', 'jquery', 'es6'];




// TODOne: rewrite the object literal using object property shorthand
users.push({
  name: name,
  email: email,
  languages: languages
});
console.log(users);




// TODOne: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODOne: rewrite the following using arrow functions
// users.forEach(function(user) {
//     return emails.push(user.email);
// });
users.forEach(users => {
  emails.push(users.email);
});
console.log(emails);


// users.forEach(function(user) {
//     return names.push(user.name);
// });
users.forEach(users => {
  names.push(users.name);
});
console.log(names);





// TODOne: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
  // TODOne: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;
  const {name, email, languages} = user;
  console.log(name);
  console.log(email);
  console.log(languages);


  // TODOne: rewrite the assignment below to use template strings
  // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
  developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}.`);
  console.log(developers);
});




// TODOne: Use `let` for the following variable
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {

// TODO: rewrite the assignment below to use template strings
//     list += '<li>' + developer + '</li>';
// });
// list += '</ul>';

for(let developer of developers){
  list += `<li> ${developer} </li>`;
}
list += `</ul>`;
// $('div').append(list); //to check this worked correctly with HTML tags in jsII-es6-curriculum.html
