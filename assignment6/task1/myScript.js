
console.log("Name: Amir Alimov, Group: SE-2431");
alert("Hello, JavaScript World!");

let name = "Amir";
let age = 20;
let isStudent = true;


let x = 10;
let y = 4;


let greeting = "Hello, my name is " + name + " and I am " + age + " years old.";



let result = `
    <p>Name: ${name}</p>
    <p>Age: ${age}</p>
    <p>Addition ${x + y}</p>
    <p>Subtraction: ${x - y}</p>
    <p>Multiplication: ${x * y}</p>
    <p>Division: ${x / y}</p>
    <p>Remainder: ${x % y}</p>
    <p>Greeting: Hello, my name is ${name} and I am ${age} years old.</p>
    <p>Am I a student? ${isStudent}</p>
`

document.getElementById("output").innerHTML = result