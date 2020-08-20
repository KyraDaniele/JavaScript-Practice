// DigitalCrafts JavaScript 101 Exercises
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
