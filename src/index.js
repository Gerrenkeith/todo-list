// src/index.js
import "./styles.css";
import { greeting } from "./greeting.js";
import createLists from "./lists.js";

console.log(greeting);

function addToList(title, description, dueDate, priority, notes, checklist) {
    const newItem = createLists(title, description, dueDate, priority, notes, checklist);
    list.push(newItem);
}

let list = []
addToList("Mow the lawn", "Mow the front and back yard", "2023-10-01", "high", "Use the new mower", ["front yard", "back yard"]);
addToList("Grocery shopping", "Buy ingredients for dinner", "2023-10-02", "medium", "Check for discounts", ["chicken", "vegetables", "spices"]);

console.log(list);

const body = document.querySelector("body");
const app = document.createElement("div");
const h1 = document.createElement("h1");
h1.textContent = greeting;
body.appendChild(app);
app.appendChild(h1);

const listContainer = document.createElement("div");
listContainer.className = "list-container";
app.appendChild(listContainer);

list.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "list-item";
    itemDiv.textContent = item.title;
    listContainer.appendChild(itemDiv);
});
