import checkPriority from "./priority.js";
import { getList } from "./lists.js";

function displayList(listContainer) {
    const list = getList();
    listContainer.innerHTML = "";
    list.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.id = index;
        const itemTitle = document.createElement("h3");
        itemTitle.textContent = item.title;
        itemTitle.id = item.title;
        itemDiv.className = "list-item";
        itemDiv.appendChild(itemTitle);
        listContainer.appendChild(itemDiv);
    });
}

export default displayList;