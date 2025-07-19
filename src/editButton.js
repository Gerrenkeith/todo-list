function createEditButton() {
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-button";
    return editButton;
}



function editButtonClick(btn, listItem, item){
        btn.addEventListener("click", () => {
            listItem.innerHTML = "";

            let editForm = `
            <h3>Edit Project</h3>
            <form id="editForm">
                <label for="editTitle">Title:</label>
                <input type="text" id="editTitle" name="editTitle" value="${item.title}" required>
                <label for="editPriority">Priority:</label>
                        <select id="editPriority" name="editPriority">
                            <option value="" ${item.priority === "" ? "none" : ""}>Select Priority</option>
                            <option value="1" ${item.priority === "1" ? "selected" : ""}>Low</option>
                            <option value="2" ${item.priority === "2" ? "selected" : ""}>Medium</option>
                            <option value="3" ${item.priority === "3" ? "selected" : ""}>High</option>
                        </select>
                        label for="editDate">Due Date:</label>
                <input type="date" id="editDate" name="editDate" value="${item.dueDate}" required>
                <label for="editDescription">Description:</label>
                <textarea id="editDescription" name="editDescription" rows="4" cols="50">${item.description}</textarea>
                <label for="editNotes">Notes:</label>
                <textarea id="editNotes" name="editNotes" rows="4" cols="50">${item.notes}</textarea>
                <label for="editChecklist">Checklist (comma-separated):</label>
                <input type="text" id="editChecklist" name="editChecklist" value="${item.checklist.join(", ")}" placeholder="Item 1, Item 2, Item 3">
                <br>
                <br>
                        <button type="submit">Save Changes</button>
                        <button type="button" id="cancelEditButton">Cancel</button>
                    </form>
                `;

            listItem.innerHTML = editForm;
    })

    const editFormElement = document.getElementById("editForm");

    if (editFormElement) {
        editFormElement.addEventListener("submit", (e) => {
            e.preventDefault();
            const title = document.getElementById("editTitle").value;
            const priority = document.getElementById("editPriority").value;
            const date = document.getElementById("editDate").value;
            const description = document.getElementById("editDescription").value;
            const notes = document.getElementById("editNotes").value;
            const checklistInput = document.getElementById("editChecklist").value;
            const checklist = checklistInput ? checklistInput.split(",").map(item => item.trim()) : [];

            item.title = title;
            item.priority = priority;
            item.dueDate = date;
            item.description = description;
            item.notes = notes;
            item.checklist = checklist;

            displayProjects(listItem.parentElement);
        });
    }
}




export { createEditButton, editButtonClick };
