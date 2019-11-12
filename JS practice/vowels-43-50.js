//Second look at JS 101 exercises 43-50/101


//TODO: #43 write a function that returns true if value input is a vowel else return false
function isVowel(value) {
    switch (value) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
            return true;
            break;
        default:
            return false;
    }
}
console.log(isVowel("E"));
console.log(isVowel("e"));

// TODO: #44 create a function that will return true if value has a vowel else return false
// The function below was what I initially wrote, and it works. But I wrote a more efficient way on second look

// function hasVowels(string) {
//     if (string.includes("a", "e", "i", "o", "u", "A", "E", "I", "O", "U")) {
//         return true;
//     } else {
//         return false;
//     }
// }

function hasVowel(value) {
    for
}




