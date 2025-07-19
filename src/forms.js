import { addToList, getList } from "./lists.js";
import { displayProjects, addProjectButton } from "./render.js";

const list = getList();
console.log(list);

function projectForm(tagOne, tagTwo) {
    const projectFormContainer = document.createElement("div");
    projectFormContainer.id = "project-form-container";
    projectFormContainer.innerHTML  = `
    <h3>Add Project</h3>
            <form id="projectForm">
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" required>
                <button type="submit">Add Project</button>
                <button type="button" id="cancelButton">Cancel</button>
            </form>`


                tagTwo.addEventListener("click", () => {
                tagTwo.remove();
                tagOne.appendChild(projectFormContainer);

                const projectFormElement = document.getElementById("projectForm");
                projectFormElement.addEventListener("submit", (e) => {
                    e.preventDefault();
                    
                    const title = document.getElementById("title").value;
                    if (addToList(title)) {
                        const listContainer = document.querySelector(".list-container");
                        projectFormContainer.remove();
                        displayProjects(listContainer);
                        addProjectButton();
                        const projectButtonDiv = document.getElementById("project-button-div");
                        const addProjectFormButton = document.getElementById("add-project-form");
                        projectForm(projectButtonDiv, addProjectFormButton);
                    }
                });
            });
        }


export { projectForm };
