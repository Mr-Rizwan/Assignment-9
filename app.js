// 1. Write a TypeScript program to list the properties of a TypeScript object
var object1 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
var key = Object.keys(object1);
console.log(key);
// 2. Write a TypeScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
delete student.rollno;
var key = Object.keys(student);
console.log(key);
// 3. Write a TypeScript program to get the length of a TypeScript object.
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
var keys = Object.keys(student).length;
console.log(keys);
// Write a TypeScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];
for (var index = 0; index < library.length; index++) {
    var book = library[index];
    console.log("author :", book.author);
    console.log("title :", book.title);
    console.log("reading Status :", book.readingStatus);
    console.log(" ");
}
var volum = {
    radius: parseInt(prompt("Enter the Radius:")),
    height: parseInt(prompt("Enter the Height:"))
};
var v = 3.1416 * volum.radius * 2 * volum.height;
console.log("Volum of Cylinder is:", v);
// 6. Write a Bubble Sort algorithm in TypeScript.
var data = new Array(12, 43, 2, 5, -98, 11, 38);
var sort = data.sort(function (a, b) { return a - b; });
console.log(sort);
// 9. Write a TypeScript program to calculate the area and perimeter of a circle. 
var circle = parseInt(prompt("Enter the Radius:"));
var c = 2 * 3.1415 * circle;
console.log("Perimeter Of Circle is:", c);
// 10. Write a TypeScript program to sort an array of TypeScript objects.
var library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];
for (var index = 0; index < library.length; index++) {
    var book = library[index];
    var key = Object.keys(book);
    var sort = key.sort();
    console.log("author :", book.author);
    console.log("LibraryID  :", book.libraryID);
    console.log("title :", book.title);
    console.log(" ");
}
// 11. Write a TypeScript function to print all the methods in an TypeScript object.   
// Test Data :
// console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]
// 1
var object1 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
var length = Object.getOwnPropertyNames(object1);
console.log(length);
// 2
var object1 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
var key = Object(object1);
console.log(key);
// 3
var object1 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
var key = Object.keys(object1);
console.log(key);
// 4
function Student() {
    this.name = 'Rizwan';
    this.gender = 'Male';
}
Student.prototype.age = 20;
var studObj1 = new Student();
console.log(studObj1.age);
var studObj2 = new Student();
console.log(studObj2.age);
// 5
var text = [121, 3, 545, 66, 8];
var result = Array.isArray(text);
console.log("isArray", result);
// 12. Write a TypeScript function to parse an URL.
var url = "https://en.wikipedia.org:3000";
var parser = new URL(url);
console.log(parser.protocol);
console.log(parser.host);
console.log(parser.port);
console.log(parser.hostname);
