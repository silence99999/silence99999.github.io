const addBtn = document.getElementById("addBtn");
const titleInput = document.getElementById("taskInputTitle");
const descInput = document.getElementById("taskInputDescription");
const taskList = document.getElementById("taskList");

let tasks = [];

addBtn.addEventListener("click", e => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const desc = descInput.value.trim();
    if (!title || !desc) return alert("Fill in both fields!");

    tasks.push({
        id: Date.now(),
        title,
        desc,
        done: false,
        show: false
    });

    titleInput.value = "";
    descInput.value = "";
    render();
});

function render() {
    taskList.innerHTML = "";

    tasks.forEach(t => {
        const li = document.createElement("li");
        li.className = "list-group-item";

        const titleStyle = t.done ? 'text-decoration: line-through; color: gray;' : '';

        li.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <span style="${titleStyle}">${t.title}</span>
                <div>
                    <button class="btn btn-sm btn-info">Show</button>
                    <button class="btn btn-sm btn-success">Done</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </div>
            </div>
            ${
                t.show
                    ? `<hr class="my-2"> <div class="text-muted">${t.desc}</div>`
                    : ""
            }
        `;

        const [showBtn, doneBtn, delBtn] = li.querySelectorAll("button");

        showBtn.onclick = () => { t.show = !t.show; render(); };
        doneBtn.onclick = () => { t.done = !t.done; render(); };
        delBtn.onclick = () => { tasks = tasks.filter(x => x.id !== t.id); render(); };

        taskList.appendChild(li);
    });
}
