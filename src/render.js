import checkPriority from "./priority.js";
import { getList } from "./lists.js";

function displayProjects(listContainer) {
      const sortedList = [...getList()].sort((a, b) => Number(b.priority) - Number(a.priority));

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
    })

    console.log(sortedList)
}

export default displayProjects;