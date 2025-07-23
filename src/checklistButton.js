import { getList, addToChecklist, createListItem } from './lists.js'
import { displayProjects } from './render.js'

function addToCheckListButton(){
    const button = document.createElement("button")
    button.textContent = "Add To Checklist"
    button.className = "add-to-checklist-button"
    return button
}

console.log("gerren")
const addToChecklistClick = (btn, parent, itemTitleString) => { // Renamed 'item' to 'itemTitleString' for clarity
    btn.addEventListener("click", () => {
        let checklistformContainer = document.createElement('div'); // Create a container for the form
        checklistformContainer.className = 'checklist-form-container'; // Add a class for styling/identification
        
        checklistformContainer.innerHTML = `
        <h3>Add To Checklist</h3>
        <form class="checklistForm"> <label for="itemTitle">Item:</label>
            <input type="text" id="itemTitle" name="itemTitle" required>
            <br>
            <br>
            <button type="submit">Add</button>
            <button type="button" class="cancelChecklistItem">Cancel</button> </form>`;

        // Append the form container
        parent.appendChild(checklistformContainer);

        // Get direct reference to the form and cancel button within this specific form instance
        const checklistformElement = checklistformContainer.querySelector('.checklistForm');
        const cancelBtn = checklistformContainer.querySelector('.cancelChecklistItem');

        if(checklistformElement){
            checklistformElement.addEventListener("submit", (e) => {
                e.preventDefault();

                const checklistTitle = checklistformContainer.querySelector('#itemTitle').value; // Get value from input within this form
                console.log(checklistTitle);

                // Assuming `createListItem` is for main project items,
                // for checklist sub-items, you might want a simpler object.
                // Let's assume a basic object structure for a checklist item with a title, priority, and completed status.
                const createdChecklistItem = { 
                    title: checklistTitle, 
                    priority: 0, // Default priority
                    completed: false 
                };
                
                // Pass the project title (itemTitleString) and the new checklist item object
                addToChecklist(itemTitleString, createdChecklistItem); 
                
                // Remove the form after submission
                checklistformContainer.remove(); 
                
                // Re-render projects to show updated checklist
                displayProjects(document.querySelector(".list-container"));
                console.log(getList());
            });

            if (cancelBtn) {
                cancelBtn.addEventListener('click', () => {
                    checklistformContainer.remove(); // Remove the form when cancel is clicked
                });
            }
        }
    });
} 

export {addToCheckListButton, addToChecklistClick}