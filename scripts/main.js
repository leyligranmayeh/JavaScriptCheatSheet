var x = 5
var y = 10

console.log(x + y); //this uses variables to do simple math

console.log("Hello World"); //This is debugging in the console

alert('Welcome to My JavaScript Cheat Sheet');
alert('This is an alert'); //These are alerts

var user = {firstName: 'Leyli', lastName: 'Granmayeh'};
console.log(user.firstName); //This is a dot notation (a data type)


var car = {make: 'Toyota', model: 'Prius'};
console.log(car['make']); // This is an object (a data type)

var name = ["Leyli, Granmayeh"]
var food = ["steak, burger"]
var interests = ["gymnastics, dance"];

console.log(name, food, interests); //This is a multi demonsional array

console.log("stringone" === "string two"); //This is an example of testing

if(5>10){
 console.log("You'll never see this in the console because 5 is not greater than 10");
}
if(5<10){
 console.log("But you'll definitely see this");
} //this is an exmaple of an if statement 

if(5>10){
 console.log("You'll never see this because 5 is not greater than 10");
} else{
 console.log("You will see this though, since 5 < 10 evaluates to false");
} //this is an example of an else statement

//If and else statements are both examples of logic

function someName(numberOne, otherNumber){
	return numberOne + 10 + otherNumber;
}

console.log(someName(4, 14));//this is an example of a function

function someThing(numberOne, otherNumber){
	return numberOne + 10 + otherNumber;
}
alert(someThing(4, 14));

function someNumbers(numberThree, otherNumber){
	return numberThree + 10 + otherNumber;
}
alert(someName(5, 6));

function someFunction(numberFive, otherNumber){
	return numberFive + 10 + otherNumber;
}
alert(someName(2, 3));
//These are 3 different functions that take input and return something via the console or an alert (problem 2)

var a = 2
var b = 3

console.log(a + b)

var string1 = 2
var string2 = 3

console.log(string1 + string2)
//This is a script with variables and strings (problem 3)

var subjects = ["math, science"]
var fruits = ["apple, peach"]
var colors = ["red, blue"];

console.log(subjects, fruits, colors);
//This is a multi demonsional array (problem 4)

var x = 8

if(x<10){
alert("This variable is less than 10")}
//This is a script that checks if a variable is less than 10 (problem 5)
	


