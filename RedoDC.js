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

//
