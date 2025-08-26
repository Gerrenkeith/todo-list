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
   
        const deletebtn = deleteButton();
        deletebtn.addEventListener("click", () => {
            const indexTodelete = getList().findIndex((listItem) => listItem.title === item.title);
            
                getList().splice(indexTodelete, 1);

            displayProjects(container);
        });


        const itemDiv = document.createElement("div"); 
        itemDiv.id = index;
        itemDiv.className = "list-item";

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

            console.log(listItem)
            li.appendChild(input)
            li.appendChild(span)
            
            projectUl.appendChild(li)

            input.addEventListener('change', () => {
                if(input.checked){
                    listItem.completed = true;
                    span.style.textDecoration = 'line-through'
                } else {
                    listItem.completed = false;
                    span.style.textDecoration = 'none'
                }
        })
        })

        const checklistButton = addToCheckListButton();
        itemDiv.appendChild(checklistButtonDiv);
        checklistButtonDiv.appendChild(checklistButton)


        addToChecklistClick(checklistButton, itemInfoDisplay,  item.title)

        console.log(item);

       

    //    linkForChecklist.addEventListener('click', () => {
    //     const checklistDiv = document.getElementById("checklist-list")
    //     const displayForCheckListItems = document.createElement("div")
    //     displayForCheckListItems.className = 'display-for-checklist-items'

    //     const unorderedList = document.createElement("ul")

        
    //     checklistDiv.appendChild(displayForCheckListItems)
    //     displayForCheckListItems.appendChild(unorderedList)
    //     item.checklist.map((a) => {
    //         const allLis = document.querySelectorAll('li')
    //         console.log(allLis)
    //         const allLisValues = []

    //         allLis.forEach( element => {
    //             allLisValues.push(element.textContent)
    //         })

    //         const exists = allLisValues.some( item => item.toLowerCase() === a.title.toLowerCase());
            
    //       if(!exists){  
    //         const li = document.createElement('li')
    //         li.textContent = `${a.title}`
    //         unorderedList.appendChild(li)
    //       }
    //     })
    //     console.log(item.checklist)
    //    })
   
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