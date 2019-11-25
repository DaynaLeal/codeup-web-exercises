//Exercise 1
var a = 1;
var b = a++;
var c = ++a;
// what is the value of a, b, and c?
//a returns 3
//b returns 2
//c returns 3

var d = "hello";
var e = false;
d++;
e++;
//d returns NaN
//e returns 1

var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
//NaN

var price = 2.7;
price.toFixed(2);
//returns "2.70" (note this converts to a string)

var price = "2.7";
price.toFixed(2);
//returned an error because the value was a string. Cannot use .toFixed with a string or boolean data



isNaN(0); //returns false

isNaN(1); //returns false

isNaN(""); //returns false (WHY? -- because an empty string has a numeric value)

isNaN("string"); //returns true

isNaN("0"); //returns false

isNaN("1"); //returns false

isNaN("3.145"); //returns false

isNaN(Number.MAX_VALUE); //returns false

isNaN(Infinity); //returns false

isNaN("true"); //returns true

isNaN(true); //returns false

isNaN("false"); //returns true

isNaN(false); //returns false

// to illustrate why the isNaN() function is needed:
NaN == NaN; //returns false



!true; //returns false

!false; //returns true

!!true; //returns true

!!false; //returns false

!!0; //returns false

!!-0; //returns false

!!1; //returns true

!!-1; //returns true

!!0.1; //returns true

!!"hello"; //returns true

!!""; //returns false

!!''; //returns false

!!"false"; //returns true

!!"0"; //returns true







//Exercise 2
var sample = "Hello Codeup";
sample.length(); //returns 12
sample.toUpperCase(); //returns "HELLO CODEUP"
sample = sample + " Students"; //returns "Hello Codeup Students"
sample = sample.replace("Students", "Class"); //returns "Hello Codeup Class"
sample.indexOf("c"); //returns -1 because there is no little c in string
sample.indexOf("C"); //returns 6
sample.substring("6", "12"); //returns "Codeup"
    sample.substring(sample.indexOf("C"), sample.indexOf("p") + 1); //better way of writing of the above statement, but now I dont need the index number








//Exercise 3
function movieRentals(movie1, movie2, movie3) {
    return (3 * movie1) + (3 * movie2) + (3 * movie3);
}
console.log(movieRentals(3, 5, 1)); //returns 27



function weeklyPay(googleHours, amazonHours, facebookHours) {
    return (400 * googleHours) + (380 * amazonHours) + (350 * facebookHours);
}
console.log(weeklyPay(6, 4, 10)); //returns 7420



//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
var classAt8AM = false;
var classSize = 125;
var currentClassSize = 108;
var canEnroll = (currentClassSize < classSize) && !classAt8AM; //returns true



//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
var hasRewards = true;
var cartSize = 6;
var offerValid = true;
var getsDiscount = offerValid && (hasRewards || cartSize > 2); //returns true






//Exercise 4
var username = 'codeup';
var password = 'notastrongpassword';


var atLeastFive = password.length > 5; //returns true

var hasUsername = password.includes(username); //returns false
//technically could also use hasUsername = password.indexOf(username), which returns -1, which implies that this is not in the string

var lessThanTwenty = username.length <= 20; //returns true

var noWhiteSpace = username.trim() === username && password.trim() === password; //returns true











