const name = "MasterJaneza"; // - i cant type georgian on keyboard this is primative because it does not include any methods and we cant change the value nad it includes easy information
const age = 29; // same for this this is primative
const skills = ["JavaScript", "React"]; // this is non primative  because we can change the value and it includes methods
const greet = function() { return "Hello!"; }; // same for this is is non primative
const isCool = true; //this is primative because it holds basic information and it does not have any methods
const details = { country: "Georgia" }; // this is non primative  because we can change the value and it includes methods

let isFalsy = a =>  a? false: true;

console.log(isFalsy(0));