// JavaScript 101 Exercises
// 1. Write a function which given a name, says hello to the name.
function hello(name) {
	console.log("Hello, " + name + "!");
}
hello("Kyra");

// 2. Modify your hello program such that if no name is given, it will print "Hello, world!", otherwise it behaves the same as previously.
function hello(name) {
	if (name) {
		console.log("Hello, " + name + "!");
	} else {
		console.log("Hello, world!");
	}
}
hello();

// 3. Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).
function madlib(name, subject) {
	return name + "'s favorite subject is " + subject;
}
console.log(madlib("Kyra", "coding"));

// 4. Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:
// good -> 20%
// fair -> 15%
// bad -> 10%
let tip = 0;
function tipAmount(bill, service) {
	if (service === "good") {
		return "Your tip is $" + (tip = bill * 0.2);
	} else if (service === "fair") {
		return "Your tip is $" + (tip = bill * 0.15);
	} else if (service === "bad") {
		return "Your tip is $" + (tip = bill * 0.1);
	} else {
		return "Please say if your service was good, fair, or bad.";
	}
}
console.log(tipAmount(100, "good"));
console.log(tipAmount(57, "fair"));
console.log(tipAmount(29, "bad"));
console.log(tipAmount(92, "decent"));

// 5. Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.
let tip = 0;
let finalBill = 0;
function totalAmount(bill, service) {
	if (service === "good") {
		tip = bill * 0.2;
	} else if (service === "fair") {
		tip = bill * 0.15;
	} else if (service === "bad") {
		tip = bill * 0.1;
	} else {
		return "Please say if your service was good, fair, or bad.";
	}
	return "Your total with tip is $" + (finalBill = tip + bill);
}
console.log(totalAmount(100, "good"));
console.log(totalAmount(57, "fair"));
console.log(totalAmount(29, "bad"));
console.log(totalAmount(92, "decent"));

// 6. Write a function splitAmount that takes the bill amount and the level of service, and the number of people to split the bill between. It will return the final amount for each person.
let tip = 0;
let finalBill = 0;
function splitAmount(bill, service, people) {
	if (service === "good") {
		tip = bill * 0.2;
	} else if (service === "fair") {
		tip = bill * 0.15;
	} else if (service === "bad") {
		tip = bill * 0.1;
	} else {
		return "Please say if your service was good, fair, or bad.";
	}
	return "Each person pays $" + (finalBill = (tip + bill) / people);
}
console.log(splitAmount(100, "good", 5));
console.log(splitAmount(57, "fair", 3));
console.log(splitAmount(29, "bad", 2));
console.log(splitAmount(92, "decent", 7));

// Array, Object, and Function exercises

// Function Exercises
// Implement all of the following problems without using a while or a for loop unless you were explicitly asked to use loops.

// 1. Positive Numbers - Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.
const arr1 = [1, -4, 2, -7, 5, -8];
const arr2 = arr1.filter((item) => item >= 0);
console.log(arr2);

// 2. Even Numbers. Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.
const arr1 = [1, -4, 2, -7, 5, -8];
const arr2 = arr1.filter((item) => item % 2 === 0);
console.log(arr2);
// -- OR --
function getEvens(num) {
	if (num % 2 === 0) {
		console.log(num);
	}
}

const arr = [1, 2, 3, 4, 5, 6];
arr.forEach(getEvens);

// 3. Square the Numbers. Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two.
const arr = [1, 2, 3, 4, 5, 6];
function squaredNums(num) {
	console.log(num * num);
}
arr.forEach(squaredNums);

// Cities 1. Write a function which takes an array of city objects as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.
const cities = [
	{ name: "Los Angeles", temperature: 60.0 },
	{ name: "Atlanta", temperature: 52.0 },
	{ name: "Detroit", temperature: 48.0 },
	{ name: "New York", temperature: 80.0 },
];

const coolCities = cities.filter(function (e) {
	return e.temperature <= 70;
});
console.log(coolCities);

// Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names.
const cities = [
	{ name: "Los Angeles", temperature: 60.0 },
	{ name: "Atlanta", temperature: 52.0 },
	{ name: "Detroit", temperature: 48.0 },
	{ name: "New York", temperature: 80.0 },
];

const cityNames = cities.map(function (e) {
	return e.name;
});

console.log(cityNames);

// Good Job! Given an array of people's names, print out 'Good Job, {{name}}!' for each person's name, one on a line.
const people = [
	"Dom",
	"Lyn",
	"Kirk",
	"Autumn",
	"Trista",
	"Jesslyn",
	"Kevin",
	"John",
	"Eli",
	"Juan",
	"Robert",
	"Keyur",
	"Jason",
	"Che",
	"Ben",
];

people.forEach(function (name) {
	console.log("Good job " + name + "!");
});

// 3 times. Given this function, use the call3Times function to print "Hello, world!" 3 times.
const helloWorld = (fun) => console.log("Hello, world!");
function call3Times(fun) {
	fun();
	fun();
	fun();
}
call3Times(helloWorld);

// n times. You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. You are allowed to use a loop in the implementation of callNTimes.
function callNTimes(times, fun) {
	if (times < 1) {
		return;
	}
	fun();
	times = times - 1;
	callNTimes(times, fun);
}

function hello() {
	console.log("Hello, World!");
}

callNTimes(5, hello);

// Str Multiply. Write a strMultiply function which takes two arguments: str - the string to multiply and times - number of times to multiply. You may not use the native repeat method that strings provide. But you may use the following range function as is:

// function range(min, max) {
// 	const arr = [];
// 	for (var i = min; i < max; i++) {
// 		arr.push(i);
// 	}
// 	return arr;
// }

function strMultiply(str, times) {
	if (times === 0) {
		return "";
	}
	if (times === 1) {
		return str;
	} else {
		return str + strMultiply(str, times - 1);
	}
}

strMultiply("cat", 3);

// Bonus: Array sorting. For these exercises, you'll want to refer to the MDN docs on using Array's sort method.

// Sort an array. Given an array of strings such as the array of names given in one of the "Good Job" problem, sort them by alphabetically order.
console.log(people.sort());

// Sort an array 2. Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.
people.sort(function (a, b) {
	return a.length - b.length;
});

// Sort an array 3. Given an array of array of products, sort the array by price.
const products = [
	{ name: "Basketball", price: 12.0 },
	{ name: "Tennis Racquet", price: 66.0 },
	{ name: "Tennis Balls", price: 9.0 },
	{ name: "Tennis Balls", price: 9.0 },
];

console.log(
	products.sort(function (a, b) {
		return a.price - b.price;
	})
);

// Exercises: JavaScript 102

// Print Numbers. Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line. Write two versions of the above function. One using a while loop and the other using a for loop.
// FOR LOOP
function printNumbers(min, max) {
	for (let nums = min; nums <= max; nums++) console.log(nums);
}
printNumbers(2, 9);

// WHILE LOOP
function printNumbers(min, max) {
	let nums = min;
	while (nums <= max) {
		console.log(nums++);
	}
}
printNumbers(4, 13);

//
