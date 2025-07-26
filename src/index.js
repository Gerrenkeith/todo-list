import "./styles.css";
import { greeting } from "./greeting.js";
import { addToList, getList } from "./lists.js";
import { displayProjects, addProjectButton}  from "./render.js";
import { projectForm } from "./forms.js";

const body = document.querySelector("body");
const app = document.createElement('div')
app.id = 'app'
const projectsDiv = document.createElement("div");
const checklistDiv = document.createElement('div');
projectsDiv.id = "projects-list"
checklistDiv.id = 'checklist-list'
const h1 = document.createElement("h1");
h1.textContent = greeting;
body.appendChild(app);
app.appendChild(projectsDiv)
app.appendChild(checklistDiv)
projectsDiv.appendChild(h1);

const listContainer = document.createElement("div");
listContainer.className = "list-container";
projectsDiv.appendChild(listContainer);

addToList("Project 1")
displayProjects(listContainer);


    const projectButtonDiv = document.createElement("div");
    projectButtonDiv.id = "project-button-div";
    body.appendChild(projectButtonDiv);
    
addProjectButton();
const addProjectFormButton = document.getElementById("add-project-form");

projectForm(projectButtonDiv, addProjectFormButton);


