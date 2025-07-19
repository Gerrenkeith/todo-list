function deleteButton() {
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.className = "delete-button";
    return button;
}

export default deleteButton;