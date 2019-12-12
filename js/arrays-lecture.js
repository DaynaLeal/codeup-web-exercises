var pet1 = "Toby";
var pet2 = "Princess";
var pet3 = "Samson";
var pet4 = "Jill";
var pet5 = "Bubbles";
var pet6 = "Malu";

var pets = ["Toby", "Princess", "Samson", "Jill", "Bubbles", "Malu"];

// for (var i = 0; i< pets.length;i++){
//     console.log(pets);
// }

pets[pets.length] = "Lily";
console.log(pets[pets.length-1]);

pets.forEach(function (pet, i, pets) {
    console.log(pet);
    //same as console.log(pets[i]);
});