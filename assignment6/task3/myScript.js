
const box=document.getElementById("box")

box.addEventListener("mouseover", function() {
box.style.backgroundColor = "orange";
});

box.addEventListener("mouseout", function() {
    box.style.backgroundColor = "white";
});

const input = document.getElementById("textInput");
const output = document.getElementById("output");

input.addEventListener("keyup", function() {
    output.textContent = input.value;
});

function getNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    return { num1, num2 };
}

function add() {
    const { num1, num2 } = getNumbers();
    document.getElementById("result").textContent = "Result: " + (num1 + num2);
}

function subtract() {
    const { num1, num2 } = getNumbers();
    document.getElementById("result").textContent = "Result: " + (num1 - num2);
}

function multiply() {
    const { num1, num2 } = getNumbers();
    document.getElementById("result").textContent = "Result: " + (num1 * num2);
}

function divide() {
    const { num1, num2 } = getNumbers();
    if (num2 === 0) {
        document.getElementById("result").textContent = "Error: Division by zero!";
    } else {
        document.getElementById("result").textContent = "Result: " + (num1 / num2);
    }
}
