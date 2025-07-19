import checkPriority from "./priority.js";
import { getList } from "./lists.js";
import {createEditButton, editButtonClick} from "./editButton.js";
import deleteButton from "./deleteButton.js";

console.log(getList())
function displayProjects(container) {
      const sortedList = [...getList()].sort((a, b) => Number(b.priority) - Number(a.priority));

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

        if (item.priority) {
            const prioritySymbol = checkPriority(item.priority);
            const prioritySpan = document.createElement("span");
            prioritySpan.textContent = prioritySymbol;
            prioritySpan.className = "priority-symbol";
            itemDiv.appendChild(prioritySpan);
        }

        if (item.dueDate) {
            const dueDateSpan = document.createElement("span");
            dueDateSpan.textContent = `Due: ${item.dueDate}`;
            dueDateSpan.className = "due-date";
            itemDiv.appendChild(dueDateSpan);
        }

        console.log(item)
        const editbtn = createEditButton()


        editButtonClick(editbtn, itemDiv, item);

        itemDiv.appendChild(editbtn);

            const deletebtn = deleteButton();
        deletebtn.addEventListener("click", () => {
            const indexTodelete = getList().findIndex((listItem) => listItem.title === item.title);
            
                getList().splice(indexTodelete, 1);

            displayProjects(container);
        });
        itemDiv.appendChild(deletebtn);
   
        })

    


    console.log(sortedList)
}

export default displayProjects;