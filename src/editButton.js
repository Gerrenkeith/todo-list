import { getList, editListItem } from "./lists";
import { displayProjects} from "./render.js";


function createEditButton() {
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-button";
    return editButton;
}



function editProjectClick(btn, listItem, item) {
        btn.addEventListener("click", () => {
            listItem.innerHTML = "";

            let editForm = `
            <h3>Edit Project</h3>
            <form id="editForm">
                <label for="editTitle">Title:</label>
                <input type="text" id="editTitle" name="editTitle" value="${item.title}" required>
                <br>
                <br>
                        <button type="submit">Save Changes</button>
                        <button type="button" id="cancelEditButton">Cancel</button>
                    </form>
                `;

            listItem.innerHTML = editForm;

            const editFormElement = document.getElementById("editForm");
            editFormElement.addEventListener("submit", (e) => {
                e.preventDefault();
                const updatedTitle = document.getElementById("editTitle").value;

                if (updatedTitle) {
                    item.title = updatedTitle;
                    const indexToEdit = getList().findIndex((listItem) => listItem.title === item.title);
                    editListItem(indexToEdit, { title: updatedTitle });
                    displayProjects(document.querySelector(".list-container"));
                }
            });

            const cancelEditButton = document.getElementById("cancelEditButton");
            cancelEditButton.addEventListener("click", () => {
                displayProjects(document.querySelector(".list-container"));
            });
        });
}

export { createEditButton, editProjectClick };
