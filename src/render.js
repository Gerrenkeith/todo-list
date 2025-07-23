import checkPriority from "./priority.js";
import { getList } from "./lists.js";
import {createEditButton, editProjectClick} from "./editButton.js";
import deleteButton from "./deleteButton.js";
import { addToCheckListButton, addToChecklistClick } from "./checklistButton.js";

console.log(getList())
function displayProjects(container) {
      const list = getList()

      console.log(list);
    container.innerHTML = "";
    list.forEach((item, index) => {
        const itemDiv = document.createElement("div"); 
        itemDiv.id = index;
        itemDiv.className = "list-item";

        const checklistButtonDiv = document.createElement('div');
        checklistButtonDiv.className = "checklist-button-div"

       
        const editButtonsDiv = document.createElement("div");
        editButtonsDiv.className = "edit-button-div";
        
        const itemInfoDisplay = document.createElement("div");
        itemInfoDisplay.className = 'item-info-display'
        const itemTitle = document.createElement("h3");
       
        itemTitle.textContent = item.title;
        itemTitle.id = item.title;
        itemDiv.appendChild(itemInfoDisplay);
        itemInfoDisplay.appendChild(itemTitle);
        container.appendChild(itemDiv);

        const checklistButton = addToCheckListButton();
        itemDiv.appendChild(checklistButtonDiv);
        checklistButtonDiv.appendChild(checklistButton)


        addToChecklistClick(checklistButton, itemInfoDisplay,  item.title)

        console.log(item);
        const editbtn = createEditButton();


        editProjectClick(editbtn, itemDiv, item);

        editButtonsDiv.appendChild(editbtn);

            const deletebtn = deleteButton();
        deletebtn.addEventListener("click", () => {
            const indexTodelete = getList().findIndex((listItem) => listItem.title === item.title);
            
                getList().splice(indexTodelete, 1);

            displayProjects(container);
        });
        editButtonsDiv.appendChild(deletebtn);

       itemDiv.appendChild(editButtonsDiv)
   
        })

    

    console.log(getList());
    
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