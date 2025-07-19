import checkPriority from "./priority.js";
import { getList } from "./lists.js";
import {createEditButton, editProjectClick} from "./editButton.js";
import deleteButton from "./deleteButton.js";

console.log(getList())
function displayProjects(container) {
      const sortedList = getList()

      console.log(sortedList);
    container.innerHTML = "";
    sortedList.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.id = index;
        itemDiv.className = "list-item";
        const itemTitle = document.createElement("h3");
        itemTitle.textContent = item.title;
        itemTitle.id = item.title;
        itemDiv.appendChild(itemTitle);
        container.appendChild(itemDiv);

        console.log(item)
        const editbtn = createEditButton()


        editProjectClick(editbtn, itemDiv, item);

        itemDiv.appendChild(editbtn);

            const deletebtn = deleteButton();
        deletebtn.addEventListener("click", () => {
            const indexTodelete = getList().findIndex((listItem) => listItem.title === item.title);
            
                getList().splice(indexTodelete, 1);

            displayProjects(container);
        });
        itemDiv.appendChild(deletebtn);
   
        })

    

    console.log(getList());
    console.log(sortedList);
}

function addProjectButton(){
    const body = document.querySelector("body");
    const addProjectForm = document.createElement("button");
    addProjectForm.textContent = "Add Project";
    addProjectForm.id = "add-project-form";

    const projectButtonDiv = document.getElementById("project-button-div");
    projectButtonDiv.appendChild(addProjectForm);
    body.appendChild(projectButtonDiv);
}


export {displayProjects, addProjectButton };