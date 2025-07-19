import "./styles.css";
import { greeting } from "./greeting.js";
import { addToList, getList } from "./lists.js";
import  displayProjects  from "./render.js";
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

addToList("Project 1", "2");
displayProjects(listContainer);

const projectButtonDiv = document.createElement("div");
projectButtonDiv.className = "project-button-div";
const addProjectButton = document.createElement("button");
addProjectButton.textContent = "Add Project";
projectButtonDiv.appendChild(addProjectButton);
body.appendChild(projectButtonDiv);

projectForm(projectButtonDiv, addProjectButton);


