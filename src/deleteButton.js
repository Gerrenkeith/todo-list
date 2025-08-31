import { getList } from "./lists";
import { displayProjects } from "./render";

const deleteProjectButtonClick = (currentItem, display) => {
    const indexToDelete = getList().findIndex((listItem) => listItem.title === currentItem.title);

    if (indexToDelete !== -1) {
        getList().splice(indexToDelete, 1);
    }

    displayProjects(display);
};

const deleteChecklistItemClick = (list, index, checklistIndex) => {
             
                 list[index].checklist.splice(checklistIndex, 1);

             displayProjects(container);
}

export { deleteProjectButtonClick, deleteChecklistItemClick };