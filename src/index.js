import "./styles.css";
import { greeting } from "./greeting.js";
import { addToList, getList } from "./lists.js";
import  displayProjects  from "./render.js";

const body = document.querySelector("body");
const app = document.createElement("div");
const h1 = document.createElement("h1");
h1.textContent = greeting;
body.appendChild(app);
app.appendChild(h1);

const listContainer = document.createElement("div");
listContainer.className = "list-container";
app.appendChild(listContainer);

addToList("Project 1", "2");
displayProjects(listContainer);

const projectButtonDiv = document.createElement("div");
projectButtonDiv.className = "project-button-div";
const addProjectButton = document.createElement("button");
addProjectButton.textContent = "Add Project";
projectButtonDiv.appendChild(addProjectButton);
body.appendChild(projectButtonDiv);

let formDiv;
function addProjectForm() {
formDiv = document.createElement("div");
formDiv.className = "add-project-form";
formDiv.innerHTML = `
    <h2>Add Project</h2>
    <form id="projectForm">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" required>
        <label for="priority">Priority:</label>
        <select id="priority" name="priority" >
            <option value="" selected>Select Priority</option>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
        </select>
        <label for="date">Due Date:</label>
        <input type="date" id="date" name="date" required>
        <label for="description">Description:</label>
        <textarea id="description" name="description" rows="4" cols="50"></textarea>
        <label for="notes">Notes:</label>
        <textarea id="notes" name="notes" rows="4" cols="50"></textarea>
        <label for="checklist">Checklist (comma-separated):</label>
        <input type="text" id="checklist" name="checklist" placeholder="Item 1, Item 2, Item 3">
        <br>
        <br>
        <button type="submit">Add Project</button>
        <button type="button" id="cancelButton">Cancel</button>
    </form>
`;

body.appendChild(formDiv);
}

const projectFormSubmitHandler = (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const priority = document.getElementById("priority").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;
    const notes = document.getElementById("notes").value;
    const checklistInput = document.getElementById("checklist").value;
    const checklist = checklistInput ? checklistInput.split(",").map(item => item.trim()) : [];

    const added = addToList(title, priority, date, description, notes, checklist);
    if (added) {
        displayProjects(listContainer);
        formDiv.remove();
        formDiv.innerHTML = ""
    }
};

addProjectButton.addEventListener("click", () => {
    if (!document.body.contains(formDiv)) {
        addProjectForm();
        const projectForm = document.getElementById("projectForm");
        if (projectForm && !projectForm.hasSubmitHandler) {
            projectForm.addEventListener("submit", projectFormSubmitHandler);
            projectForm.hasSubmitHandler = true;
            const cancelButton = document.getElementById("cancelButton");
            cancelButton.addEventListener("click", () => {
                formDiv.remove();
            });
        }
    }
});

