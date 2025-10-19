function changeText() {
    const paragraph = document.getElementById("paragraph");
    paragraph.textContent = "new text";
}

function changeColor() {
    const box = document.getElementById("colorBox");

    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    box.style.backgroundColor = randomColor;
}

function changeFontSize() {
    const box = document.getElementById("colorBox");
    const newSize = Math.floor(Math.random() * 16) + 14;
    box.style.fontSize = newSize + "px";
}

function addItem() {
    const list = document.getElementById("itemList");
    const newItem = document.createElement("li");
    newItem.textContent = "New Item " + (list.children.length + 1);
    list.appendChild(newItem);
}

function removeItem() {
    const list = document.getElementById("itemList");
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
}