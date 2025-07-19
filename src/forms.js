function projectForm(tagOne, tagTwo) {
    const projectFormContainer = document.createElement("div");
    projectFormContainer.id = "project-form-container";
    projectFormContainer.innerHTML  = `
    <h3>Add Project</h3>
            <form id="projectForm"></form>
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" required>
                <button type="submit">Add Project</button>
                <button type="button" id="cancelButton">Cancel</button>
            </form>`

            if (!document.body.contains(projectFormContainer)) {

                tagTwo.addEventListener("click", () => {
                tagTwo.remove();
                tagOne.appendChild(projectFormContainer);
                })
           }

}

export { projectForm };
