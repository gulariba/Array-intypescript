// what is array
// An array is a special type of data type
// which can store multiple values of different
// data types sequentially using a special 
//syntax.
//TypeScript supports arrays, similar
// to JavaScript. There are two ways to
// declare an array:
//1. Using square brackets. 
//This method is similar to how you
// would declare arrays in JavaScript.
//let fruits: string[] = ['Apple', 'Orange', 'Banana'];
//2. Using a generic array type,
// Array<elementType>.
var vegetable = ['Cabbage', 'Potato', 'Onion'];
//Arrays can be declared and 
//initialized separately.
var colors;
colors = ['Red', 'Orange', 'Yellow'];
var numbers1;
numbers1 = [23, 34, 100, 124, 44];
//An array in TypeScript can contain
// elements of different data types
// using a generic array type syntax,
// as shown below.
var example = ['Apple', 2, 'Orange', 3, 4, 'Banana']; //small bracket declared
// or 
var solution = ['Apple', 2, 'Orange', 3, 4, 'Banana']; //generic array type
//Accessing Array Elements:
//The array elements can be accessed using the index of an element
// e.g. ArrayName[index]. The array index starts from zero,
// so the index of the first element is zero, the index of the second 
//element is one and so on.
var boysname = ['Ali', 'Waseem', 'Samran'];
boysname[0]; // returns Ali
boysname[1]; // returns Waseem
boysname[2]; // returns Samran
boysname[3]; // returns undefined
//access array element using loops
// index in array
//starts with 0, 1,2 ,3 ,4, 5......
//address in array
// starts with 1, 2 ,3 ,4.....
var girls = ['areeba', 'ayesha', 'sumaira'];
console.log(girls[0]);
console.log(girls[1]);
console.log(girls[2]);
console.log(girls[3]);
console.log(girls[4]);
var mens = [20, 30, 40, 45];
console.log(mens[3]);
console.log(mens[2]);
console.log(mens[1]);
console.log(mens[0]);
//Typescript array methods
//The following table lists all Array methods which can be used for different purposes.
//Method	Description
//pop()	Removes the last element of the array and return that element
//push()	Adds new elements to the array and returns the new array length
//sort()	Sorts all the elements of the array
//concat()	Joins two arrays and returns the combined result
//indexOf()	Returns the index of the first match of a value in the array (-1 if not found)
//copyWithin()	Copies a sequence of elements within the array
//fill()	Fills the array with a static value from the provided start index to the end index
//shift()	Removes and returns the first element of the array
//splice()	Adds or removes elements from the array
//unshift()	Adds one or more elements to the beginning of the array
//includes()	Checks whether the array contains a certain element
//join()	Joins all elements of the array into a string
//lastIndexOf()	Returns the last index of an element in the array
//slice()	Extracts a section of the array and returns the new array
//toString()	Returns a string representation of the array
//toLocaleString()	Returns a localized string representing the array
var fruits1 = ['Apple', 'Orange', 'Banana'];
fruits1.sort();
console.log(fruits1); //output: [ 'Apple', 'Banana', 'Orange' ]
console.log(fruits1.pop()); //output: Orange
fruits1.push('Papaya');
console.log(fruits1); //output: ['Apple', 'Banana', 'Papaya']
fruits1 = fruits1.concat(['Fig', 'Mango']);
console.log(fruits1); //output: ['Apple', 'Banana', 'Papaya', 'Fig', 'Mango'] 
console.log(fruits1.indexOf('Papaya')); //output: 2
//TypeScript provides a variety of array methods
// that you can use to manipulate and interact with arrays. 
//These methods are largely the same as those in JavaScript
// since TypeScript is a superset of JavaScript.
// Here are some of the most commonly used array methods in TypeScript:
//01 
//push()
//Adds one or more elements to the end of an array and
// returns the new length of the array.
var fruit2 = ["apple", "banana"];
fruit2.push("orange"); // ["apple", "banana", "orange"]
//02
//pop()
//Removes the last element from an array and returns that element.
var fruit3 = ["apple", "banana", "orange"];
var firstFruit = fruit3.shift(); // "apple"
//03 
//unshift()
//Adds one or more elements to the beginning of an 
//array and returns the new length of the array.
var fruit4 = ["banana", "orange"];
fruit4.unshift("apple"); // ["apple", "banana", "orange"]
//04
//concat()
//Merges two or more arrays and returns a new array.
var fruits5 = ["apple", "banana"];
var fruits6 = ["orange", "mango"];
var allFruits = fruits5.concat(fruits6); // ["apple", "banana", "orange", "mango"]
//05
//slice()
//Adds or removes elements from an array and returns the removed elements.
var fruits7 = ["apple", "banana", "orange", "mango"];
var removedFruits1 = fruits7.splice(2, 1, "kiwi"); // ["orange"]
// fruits is now ["apple", "banana", "kiwi", "mango"]
//06
// slice
//Returns a shallow copy of a portion of an array into a new array.
var fruits8 = ["apple", "banana", "orange", "mango"];
var citrus = fruits8.slice(1, 3); // ["banana", "orange"]
//07
//splice()
//Adds or removes elements from an array and returns the removed elements.
var fruits9 = ["apple", "banana", "orange", "mango"];
var removedFruits2 = fruits9.splice(2, 1, "kiwi"); // ["orange"]
// fruits is now ["apple", "banana", "kiwi", "mango"]
//08
//forEach()
//Executes a provided function once for each array element.
var fruits10 = ["apple", "banana", "orange"];
fruits10.forEach(function (fruit) { return console.log(fruit); });
//09
//map
//Creates a new array populated with the results of calling a
// provided function on every element in the calling array.
var numbers2 = [1, 2, 3, 4];
var doubled = numbers2.map(function (num) { return num * 2; }); // [2, 4, 6, 8]
//10
//filter
//Creates a new array with all elements that 
//pass the test implemented by the provided function.
var numbers3 = [1, 2, 3, 4, 5];
var evenNumbers = numbers3.filter(function (num) { return num % 2 === 0; }); // [2, 4]
//11
//reduce()
//Executes a reducer function on each element of the array
//, resulting in a single output value.
var numbers4 = [1, 2, 3, 4];
var sum = numbers4.reduce(function (acc, num) { return acc + num; }, 0); // 10
//12
//find
//Returns the value of the first element
// in the array that satisfies the provided testing function.
var numbers5 = [1, 2, 3, 4];
var found = numbers5.find(function (num) { return num > 2; }); // 3
//13
//findindex
//Returns the index of the first element in the array
// that satisfies the provided testing function.
var numbers = [1, 2, 3, 4];
var index = numbers.findIndex(function (num) { return num > 2; }); // 2
//14
//sort
//Sorts the elements of an array in place and returns the array.
var fruits20 = ["banana", "apple", "orange"];
fruits20.sort(); // ["apple", "banana", "orange"]
//15
//reverse
//Reverses the order of the elements in an array in place.
var fruits30 = ["apple", "banana", "orange"];
fruits30.reverse(); // ["orange", "banana", "apple"]
//16
//includes
//Determines whether an array includes a certain value among its entries.
var fruits = ["apple", "banana", "orange"];
var hasApple = fruits.includes("apple"); // true
