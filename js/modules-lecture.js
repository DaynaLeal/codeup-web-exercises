export const hello1 = "Hello there";

export const add = (inputOne, inputTwo) => {
    return inputTwo + inputOne;
}

export const subtract = (inputOne, inputTwo) => {
    return inputOne - inputTwo;
}

//method 1
module.exports = {hello1, add, subtract}; //use this with require

//method 2 was adding export in front of the variable/function declarations

// export default {hello1, add, subtract}