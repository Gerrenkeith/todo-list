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

        const linkForChecklist = document.createElement("a")
        linkForChecklist.href = '#' 
        linkForChecklist.id = index;

        const checklistButtonDiv = document.createElement('div');
        checklistButtonDiv.className = "checklist-button-div"

       
        const editButtonsDiv = document.createElement("div");
        editButtonsDiv.className = "edit-button-div";
        
        const itemInfoDisplay = document.createElement("div");
        itemInfoDisplay.className = 'item-info-display'
        const itemTitleDisplay = document.createElement("h3");
       
        linkForChecklist.textContent = item.title;
        itemTitleDisplay.id = item.title;
        container.appendChild(itemDiv);
        itemDiv.appendChild(itemInfoDisplay);
        itemInfoDisplay.appendChild(itemTitleDisplay);
        itemTitleDisplay.appendChild(linkForChecklist)

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

       linkForChecklist.addEventListener('click', () => {
        const checklistDiv = document.getElementById("checklist-list")
        const displayForCheckListItems = document.createElement("div")
        displayForCheckListItems.className = 'display-for-checklist-items'

        const unorderedList = document.createElement("ul")

        
        checklistDiv.appendChild(displayForCheckListItems)
        displayForCheckListItems.appendChild(unorderedList)
        item.checklist.map((a) => {
            const li = document.createElement('li')
            li.textContent = `${a.title}`
            unorderedList.appendChild(li)
        })
        console.log(item.checklist)
       })
   
        })

    

    console.log(getList());
    
}

function addProjectButton(){
    const projectsDiv = document.querySelector("#projects-list");
    const addProjectForm = document.createElement("button");
    addProjectForm.textContent = "Add Project";
    addProjectForm.id = "add-project-form";

    const projectButtonDiv = document.getElementById("project-button-div");
    projectButtonDiv.appendChild(addProjectForm);
    projectsDiv.appendChild(projectButtonDiv);
}





export {displayProjects, addProjectButton };