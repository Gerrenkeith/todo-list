function deleteButton() {
    const button = document.createElement("button");
    button.textContent = "x";
    button.className = "delete-button";
    return button;
}

export default deleteButton;