var car = {
    make: "Toyota",
    model: "Sienna",
    year: 2009,
    isTitled: true,
    options: ["4 wheel drive", "heated seats", "leather interior"],
    goGoGo: function(key){
        if (key == "correct"){
            console.log("vroom");
        } else {
            console.log("...");
        }
    }
}

//above translates to what is below:
// var make = "Toyota";
// var model = "Sienna";
// var year = 2009;
// var isTitled = true;
//
// var goGoGo = function(key){
//     if (key == "correct"){
//         console.log("vroom");
//     } else {
//         console.log("...");
//     }
// }

console.log("My car is a " + car.make + " " + car.model + ".");
console.log("The car was made in " + car.year + ".");
car.options.forEach(function(option){
    console.log(option);
});
car.goGoGo("key");
car.goGoGo("correct");

//#################################################################################
// var pet = {
//     type: "dog",
//     breed: "Male Blue Heeler",
//     age: 10,
//     personality: ["barks a lot", "heated seats", "leather interior"],
//     goGoGo: function(key){
//         if (key == "correct"){
//             console.log("vroom");
//         } else {
//             console.log("...");
//         }
//     }
// }