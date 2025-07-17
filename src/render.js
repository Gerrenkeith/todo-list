import checkPriority from "./priority.js";
import { getList } from "./lists.js";
import editButton from "./editButton.js";
import deleteButton from "./deletebutton.js";

console.log(getList())
function displayProjects(listContainer) {
      const sortedList = [...getList()].sort((a, b) => Number(b.priority) - Number(a.priority));

      console.log(sortedList);
    listContainer.innerHTML = "";
    sortedList.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.id = index;
        itemDiv.className = "list-item";
        const itemTitle = document.createElement("h3");
        itemTitle.textContent = item.title;
        itemTitle.id = item.title;
        itemDiv.appendChild(itemTitle);
        listContainer.appendChild(itemDiv);

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
        const editbtn = editButton()

        editbtn.addEventListener("click", () => {
             itemDiv.innerHTML = "";

            let editForm = `
            <h3>Edit Project</h3>
            <form id="editForm">
                <label for="editTitle">Title:</label>
                <input type="text" id="editTitle" name="editTitle" value="${item.title}" required>
                <label for="editPriority">Priority:</label>
                        <select id="editPriority" name="editPriority">
                            <option value="" ${item.priority === "" ? "selected" : ""}>Select Priority</option>
                            <option value="1" ${item.priority === "1" ? "selected" : ""}>Low</option>
                            <option value="2" ${item.priority === "2" ? "selected" : ""}>Medium</option>
                            <option value="3" ${item.priority === "3" ? "selected" : ""}>High</option>
                        </select>
                        <button type="submit">Save Changes</button>
                        <button type="button" id="cancelEditButton">Cancel</button>
                    </form>
                `;

            itemDiv.innerHTML = editForm;

            if (document.body.contains(itemDiv)) {
                const editForm = document.getElementById("editForm");
                editForm.addEventListener("submit", (e) => {
                    e.preventDefault();
                    const newTitle = document.getElementById("editTitle").value;
                    const newPriority = document.getElementById("editPriority").value;
                    item.title = newTitle;
                    item.priority = newPriority;
              
                    displayProjects(listContainer);
                });
            }

            const cancelEditButton = document.getElementById("cancelEditButton");
            cancelEditButton.addEventListener("click", () => {
                displayProjects(listContainer);
            }); 

        });

    
        itemDiv.appendChild(editbtn);

            const deletebtn = deleteButton();
        deletebtn.addEventListener("click", () => {
            const indexTodelete = getList().findIndex((listItem) => listItem.title === item.title);
            
                getList().splice(indexTodelete, 1);
            
            displayProjects(listContainer);
        });
        itemDiv.appendChild(deletebtn);
   
        })

    


    console.log(sortedList)
}

export default displayProjects;