import "./styles.css";
import { greeting } from "./greeting.js";
import { addToList, getList } from "./lists.js";
import  displayList  from "./render.js";

const body = document.querySelector("body");
const app = document.createElement("div");
const h1 = document.createElement("h1");
h1.textContent = greeting;
body.appendChild(app);
app.appendChild(h1);

const listContainer = document.createElement("div");
listContainer.className = "list-container";
app.appendChild(listContainer);

addToList("Project 1", undefined, undefined, "high");
displayList(listContainer);

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
        <button type="button" id="cancelButton">Cancel</button>
    </form>
`;

const projectFormSubmitHandler = (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const added = addToList(title);
    if (added) {
        displayList(listContainer);
        formDiv.remove();
    }
};

addProjectButton.addEventListener("click", () => {
    if (!document.body.contains(formDiv)) {
        body.appendChild(formDiv);
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