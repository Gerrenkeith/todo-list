// src/index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import createLists from "./lists.js";
import checkPriority from "./priority.js"

console.log(greeting);

function addToList(title, description, dueDate, priority, notes, checklist) {
    const newItem = createLists(title, description, dueDate, priority, notes, checklist);
    list.push(newItem);
}

let list = []
addToList("Mow the lawn", "Mow the front and back yard", "2023-10-01", "high", "Use the new mower", ["front yard", "back yard"]);


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

function displayList(){
list.forEach((item, index) => {
    const itemExist = document.getElementById(index);
    const itemTitleExist = document.getElementById(item.title);
    // Check if the item already exists in the DOM 
    if(!itemExist && !itemTitleExist) {
      const itemDiv = document.createElement("div");
      itemDiv.id = index; // Set the id attribute to the index
      const itemTitle = document.createElement("h3");
        const itemPriority = document.createElement("p");
    
    itemPriority.textContent = checkPriority(item.priority);

    itemTitle.textContent = item.title;
    itemTitle.id = item.title;
    itemDiv.className = "list-item";
    itemDiv.appendChild(itemTitle);
    itemDiv.appendChild(itemPriority);
    listContainer.appendChild(itemDiv);
}
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
        <label for="description">Description:</label>
        <textarea id="description" name="description" ></textarea>
        <label for="dueDate">Due Date:</label>
        <input type="date" id="dueDate" name="dueDate">
        <label for="priority">Priority:</label>
        <select id="priority" name="priority" >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        <label for="notes">Notes:</label>
        <textarea id="notes" name="notes"></textarea>
        <label for="checklist">Checklist:</label>
        <input type="text" id="checklist" name="checklist" placeholder="Enter checklist items separated by commas">
        <button type="submit">Add Project</button>
    </form>
`;

// Attach the event listener ONCE
const projectFormSubmitHandler = (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;
    const notes = document.getElementById("notes").value;
    const checklistInput = document.getElementById("checklist").value;
    addToList(title, description, dueDate, priority, notes, checklistInput);

    displayList(); // Refresh the displayed list
    formDiv.remove(); // Remove the form after submission
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