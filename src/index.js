// src/index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import createLists from "./lists.js";
import checkPriority from "./priority.js"

console.log(greeting);

function addToList(title, description, dueDate, priority, notes, checklist) {
    const exists = list.some(item => item.title.toLowerCase() === title.toLowerCase());
    if (exists) {
        alert("A project with this title already exists.");
        return false; // Not added
    }
    const newItem = createLists(title, description, dueDate, priority, notes, checklist);
    list.push(newItem);
    return true; // Added
}

let list = []

addToList("Project 1", undefined, undefined, "high");


console.log(list);

const body = document.querySelector("body");
const app = document.createElement("div");
const h1 = document.createElement("h1");
h1.textContent = greeting;
body.appendChild(app);
app.appendChild(h1);

const listContainer = document.createElement("div");
listContainer.className = "list-container";
app.appendChild(listContainer);

function displayList() {
    // Clear the container before re-rendering
    listContainer.innerHTML = "";
    list.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.id = index;
        const itemTitle = document.createElement("h3");
        const itemPriority = document.createElement("p");

        const changePriorityButton = document.createElement("button");
        itemPriority.textContent = checkPriority(item.priority);
        itemTitle.textContent = item.title;
        itemTitle.id = item.title;
        itemDiv.className = "list-item";
        itemDiv.appendChild(itemTitle);
        itemDiv.appendChild(changePriorityButton);
        changePriorityButton.appendChild(itemPriority);
        listContainer.appendChild(itemDiv);
    });
}
displayList();

const projectButtonDiv = document.createElement("div");
projectButtonDiv.className = "project-button-div";
const addProjectButton = document.createElement("button");
addProjectButton.textContent = "Add Project";
projectButtonDiv.appendChild(addProjectButton);
body.appendChild(projectButtonDiv);

const formDiv = document.createElement("div");
formDiv.className = "add-project-form";
formDiv.innerHTML = `
    <h2>Add Project</h2>
    <form id="projectForm">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required>
        <button type="submit">Add Project</button>
    </form>
`;

// Attach the event listener ONCE
const projectFormSubmitHandler = (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;

    const added = addToList(title);

    if (added) {
        displayList(); // Refresh the displayed list
        formDiv.remove(); // Remove the form after submission
    }
};

addProjectButton.addEventListener("click", () => {
    if (!document.body.contains(formDiv)) {
        body.appendChild(formDiv);
        // Attach the event listener after the form is in the DOM, but only once
        const projectForm = document.getElementById("projectForm");
        if (projectForm && !projectForm.hasSubmitHandler) {
            projectForm.addEventListener("submit", projectFormSubmitHandler);
            projectForm.hasSubmitHandler = true;
            console.log(projectForm)
        }
    }
});

