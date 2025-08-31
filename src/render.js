import { getList } from "./lists.js";
import {createEditButton, editProjectClick} from "./editButton.js";
import { deleteProjectButtonClick } from "./deleteButton.js";
import { addToCheckListButton, addToChecklistClick } from "./checklistButton.js";
import getPrioritySymbol from "./priority.js";
import { createExpandButton } from "./expandButton.js";
import { checkboxChangeHandler, isComplete } from "./checkBoxes.js";
import { optionsSvg } from "./optionsButton.js";

const list = getList()

console.log(getList())
function displayProjects(container) {

      console.log(list);
    container.innerHTML = "";
    const projectUl = document.createElement("ul");//project list
    container.appendChild(projectUl);
    projectUl.style.listStyle = 'none';

    list.forEach((item, index) => {

        function deleteButton() {
            const button = document.createElement("button");
            button.textContent = "x";
            button.className = "delete-button";
            return button;
        }


        const deleteProjectBtn = deleteButton();
        deleteProjectBtn.addEventListener("click", () => deleteProjectButtonClick(item, container));


        const itemLi = document.createElement("li");
        itemLi.id = index;

        const itemAlphaTag = document.createElement("a");
        itemAlphaTag.href = "#";
        itemAlphaTag.textContent = item.title;

        itemLi.appendChild(itemAlphaTag);
        projectUl.appendChild(itemLi);

        const projectOptionsDiv = document.createElement("div");
        projectOptionsDiv.className = "project-options";
        projectOptionsDiv.style.width = "24px";
        projectOptionsDiv.style.height = "24px";

       const projectOptionsBtn = document.createElement("button");
        projectOptionsBtn.className = "project-options-button";
        projectOptionsBtn.style.width = "24px";
        projectOptionsBtn.style.height = "24px";
        projectOptionsBtn.style.background = "none";
        projectOptionsBtn.style.border = "none";
        projectOptionsBtn.innerHTML = optionsSvg;

        projectOptionsDiv.appendChild(projectOptionsBtn);

        itemLi.appendChild(projectOptionsDiv);

        // itemDiv.id = index;
        // itemDiv.className = "list-item";
        // itemDiv.appendChild(deletebtn);
        // const checklistDiv = document.createElement('div')

        // const projectUl = document.createElement('ul')
        // projectUl.id = `${item.title}ul`

        // const checklistButtonDiv = document.createElement('div');
        // checklistButtonDiv.className = "checklist-button-div"

        // const editButtonsDiv = document.createElement("div");
        // editButtonsDiv.className = "edit-button-div";
        
        // const itemInfoDisplay = document.createElement("div");
        // itemInfoDisplay.className = 'item-info-display'

        // const titleDiv = document.createElement("div");
        // titleDiv.className = "title-div";
        // const itemTitleDisplay = document.createElement("h3");
       
        
        // itemTitleDisplay.id = item.title;
        // itemTitleDisplay.textContent = item.title;
        // container.appendChild(itemDiv);
        // itemDiv.appendChild(itemInfoDisplay);
        // itemInfoDisplay.appendChild(titleDiv);
        // titleDiv.appendChild(itemTitleDisplay);
         
        // const editbtn = createEditButton();
        // editProjectClick(editbtn, itemDiv, item);

        // titleDiv.appendChild(editButtonsDiv);
        // editButtonsDiv.appendChild(editbtn);

        // itemDiv.appendChild(checklistDiv)
        // checklistDiv.appendChild(projectUl)

        // projectUl.style.listStyle = 'none';

        // const listOfItems = item.checklist;

        // console.log(listOfItems)
        
        // listOfItems.map((listItem) => {
        //     const li = document.createElement('li')
        //     const input = document.createElement('input')
        //     input.type = 'checkbox'
        //     input.id = listItem.title
        //     input.name = listItem.title
        //     input.value = listItem.title

        //     const span = document.createElement('span')
        //     span.textContent = listItem.title

        //     const spanTwo = document.createElement('span')

        //     const priorityLevel = getPrioritySymbol(listItem.priority)
        //     spanTwo.textContent = priorityLevel


        //     console.log(listItem)
        //     li.appendChild(input)
        //     li.appendChild(span)
        //     li.appendChild(spanTwo)

            
        //     projectUl.appendChild(li)
            
        //     const indexOfItem = listOfItems.findIndex(ci => ci.title === listItem.title);

        //     isComplete(input, listItem, span);

        //     input.addEventListener('change', () => checkboxChangeHandler(input, listItem, span, index, indexOfItem));

        // const deleteChecklistItembtn = deleteButton();

        // li.appendChild(deleteChecklistItembtn);

        // deleteChecklistItembtn.addEventListener("click", () => deleteChecklistItemClick(list, index, indexOfItem
        // ));
        // })

        // const checklistButton = addToCheckListButton();
        // itemDiv.appendChild(checklistButtonDiv);
        // checklistButtonDiv.appendChild(checklistButton)

        
        // addToChecklistClick(checklistButton, checklistButtonDiv,  item.title)

        // console.log(item);
   
         })

    

    console.log(getList());
    
}

function addProjectButton(parent){
    const addProjectButtonDiv = document.createElement("div");
    addProjectButtonDiv.id = "project-button-div";

    const addProjectFormButton = document.createElement("button");
    addProjectFormButton.textContent = "Add To-Do list";
    addProjectFormButton.id = "add-project-form";

    parent.appendChild(addProjectButtonDiv);
    addProjectButtonDiv.appendChild(addProjectFormButton);
}





export {displayProjects, addProjectButton };