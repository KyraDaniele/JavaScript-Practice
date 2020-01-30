// Let’s create a function that prints a reminder to the console. Using a function declaration, create a function called getReminder(). In the function body of getReminder(), log the following reminder to the console: 'Water the plants.'
function getReminder() {
	console.log("Water the plants.");
}

// Let’s create another function that prints a useful Spanish travel phrase to the console. Using a function declaration, create a function called greetInSpanish(). In the function body console.log() the following Spanish phrase to the console: 'Buenas Tardes.'
function greetInSpanish() {
	console.log("Buenas Tardes.");
}

// Imagine that you manage an online store. When a customer places an order, you send them a thank you note. Let’s create a function to complete this task:
// Define a function called sayThanks() as a function declaration. In the function body of sayThanks(), add code such that the function writes the following thank you message to the console when called: 'Thank you for your purchase! We appreciate your business.' Call sayThanks() to view the thank you message in the console. Imagine that three customers placed an order and you wanted to send each of them a thank you message. Update your code to call sayThanks() three times.
function sayThanks() {
	console.log("Thank you for your purchase! We appreciate your business.");
}

sayThanks();
sayThanks();
sayThanks();

// The sayThanks() function works well, but let’s add the customer’s name in the message. Add a parameter called name to the function declaration for sayThanks(). Using name and string concatenation, change the thank you message into the following:
// 'Thank you for your purchase '+ name + '! We appreciate your business.'
// A customer named Cole just purchased something from your online store. Call sayThanks() and pass 'Cole' as an argument to send Cole a personalized thank you message.
function sayThanks(name) {
	console.log(
		"Thank you for your purchase " + name + "! We appreciate your business."
	);
}

sayThanks("Cole");

// Imagine that you always purchase milk, bread, and eggs every time you go shopping for groceries. To make creating a grocery list easier, let’s assign default values to the parameters in makeShoppingList().
function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
	console.log(`Remember to buy ${item1}`);
	console.log(`Remember to buy ${item2}`);
	console.log(`Remember to buy ${item3}`);
}
makeShoppingList();

// Declare a function monitorCount() that has two parameters. The first parameter is rows and the second parameter is columns. In the function body of the function you just wrote, use the return keyword to return rows * columns. Declare a variable named numOfMonitors using the const keyword and assign numOfMonitors the value of invoking monitorCount() with the arguments 5 and 4.
function monitorCount(rows, columns) {
	return rows * columns;
}
const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);
