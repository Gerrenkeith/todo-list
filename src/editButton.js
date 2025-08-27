import { getList, editListItem } from "./lists";
import { displayProjects} from "./render.js";


function createEditButton() {
    const editButton = document.createElement("button");
    editButton.innerHTML = `<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>`;
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
