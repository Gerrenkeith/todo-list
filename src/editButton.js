function createEditButton() {
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-button";
    return editButton;
}

export default createEditButton;
