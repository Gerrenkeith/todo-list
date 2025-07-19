import "./styles.css";
import { greeting } from "./greeting.js";
import { addToList, getList } from "./lists.js";
import { displayProjects, addProjectButton}  from "./render.js";
import { projectForm } from "./forms.js";

const body = document.querySelector("body");
const app = document.createElement("div");
const h1 = document.createElement("h1");
h1.textContent = greeting;
body.appendChild(app);
app.appendChild(h1);

const listContainer = document.createElement("div");
listContainer.className = "list-container";
app.appendChild(listContainer);

addToList("Project 1")
displayProjects(listContainer);


    const projectButtonDiv = document.createElement("div");
    projectButtonDiv.id = "project-button-div";
    body.appendChild(projectButtonDiv);
    
addProjectButton();
const addProjectFormButton = document.getElementById("add-project-form");

projectForm(projectButtonDiv, addProjectFormButton);


