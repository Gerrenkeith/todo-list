import { getList } from "./lists.js";
import {createEditButton, editProjectClick} from "./editButton.js";
import { deleteProjectButtonClick } from "./deleteButton.js";
import { addToCheckListButton, addToChecklistClick } from "./checklistButton.js";
import getPrioritySymbol from "./priority.js";
import { createExpandButton } from "./expandButton.js";
import { checkboxChangeHandler } from "./checkBoxes.js";

const list = getList()

console.log(getList())
function displayProjects(container) {

      console.log(list);
    container.innerHTML = "";
    list.forEach((item, index) => {

        const expandbtn = createExpandButton();
        expandbtn.addEventListener("click", () => {
            const checklistDiv = document.createElement("div");
            checklistDiv.className = "checklist-div";
            itemDiv.appendChild(checklistDiv);
            displayChecklist(item.checklist, checklistDiv);
        });

        function deleteButton() {
    const button = document.createElement("button");
    button.textContent = "x";
    button.className = "delete-button";
    return button;
}


        const deletebtn = deleteButton();
        deletebtn.addEventListener("click", () => deleteProjectButtonClick(item, container));

        const itemDiv = document.createElement("div"); 
        itemDiv.id = index;
        itemDiv.className = "list-item";

        itemDiv.appendChild(expandbtn);
        itemDiv.appendChild(deletebtn);
        const checklistDiv = document.createElement('div')

        const projectUl = document.createElement('ul')
        projectUl.id = `${item.title}ul`

        const checklistButtonDiv = document.createElement('div');
        checklistButtonDiv.className = "checklist-button-div"

        const editButtonsDiv = document.createElement("div");
        editButtonsDiv.className = "edit-button-div";
        
        const itemInfoDisplay = document.createElement("div");
        itemInfoDisplay.className = 'item-info-display'

        const titleDiv = document.createElement("div");
        titleDiv.className = "title-div";
        const itemTitleDisplay = document.createElement("h3");
       
        
        itemTitleDisplay.id = item.title;
        itemTitleDisplay.textContent = item.title;
        container.appendChild(itemDiv);
        itemDiv.appendChild(itemInfoDisplay);
        itemInfoDisplay.appendChild(titleDiv);
        titleDiv.appendChild(itemTitleDisplay);
         
        const editbtn = createEditButton();
        editProjectClick(editbtn, itemDiv, item);

        titleDiv.appendChild(editButtonsDiv);
        editButtonsDiv.appendChild(editbtn);

        itemDiv.appendChild(checklistDiv)
        checklistDiv.appendChild(projectUl)

        projectUl.style.listStyle = 'none';

        const listOfItems = item.checklist;

        console.log(listOfItems)
        
        listOfItems.map((listItem) => {
            const li = document.createElement('li')
            const input = document.createElement('input')
            input.type = 'checkbox'
            input.id = listItem.title
            input.name = listItem.title
            input.value = listItem.title

            const span = document.createElement('span')
            span.textContent = listItem.title

            const spanTwo = document.createElement('span')

            const priorityLevel = getPrioritySymbol(listItem.priority)
            spanTwo.textContent = priorityLevel


            console.log(listItem)
            li.appendChild(input)
            li.appendChild(span)
            li.appendChild(spanTwo)

            
            projectUl.appendChild(li)
            
            const indexOfItem = listOfItems.findIndex(ci => ci.title === listItem.title);

            if(listItem.completed === true){
                input.checked = true;
                span.style.textDecoration = 'line-through';
            }

            input.addEventListener('change', () => checkboxChangeHandler(input, listItem, span, index, indexOfItem));

        const deleteChecklistItembtn = deleteButton();

        li.appendChild(deleteChecklistItembtn);

        deleteChecklistItembtn.addEventListener("click", () => {
            
                list[index].checklist.splice(indexOfItem, 1);

            displayProjects(container);
        });
        })

        const checklistButton = addToCheckListButton();
        itemDiv.appendChild(checklistButtonDiv);
        checklistButtonDiv.appendChild(checklistButton)

        
        addToChecklistClick(checklistButton, checklistButtonDiv,  item.title)

        console.log(item);
   
        })

    

    console.log(getList());
    
}

function addProjectButton(){
    const projectsDiv = document.querySelector("#projects-list");
    const addProjectForm = document.createElement("button");
    addProjectForm.textContent = "Add To-Do list";
    addProjectForm.id = "add-project-form";

    const projectButtonDiv = document.getElementById("project-button-div");
    projectButtonDiv.appendChild(addProjectForm);
    projectsDiv.appendChild(projectButtonDiv);
}





export {displayProjects, addProjectButton };