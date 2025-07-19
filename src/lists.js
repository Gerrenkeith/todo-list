let list = [];
 function createListItem(title, checklist = []) {
    return {
        title,
        checklist
        
    };
}

function addToList(title, priority, dueDate, description, notes, checklist) {
    const exists = list.some(item => item.title.toLowerCase() === title.toLowerCase());
    if (exists) {
        alert("A project with this title already exists.");
        return false;
    }
    const newItem = createListItem(title, priority, dueDate, description, notes, checklist);
    list.push(newItem);
    console.log(list);
    return true;
}

function getList() {
    return list;
}

function editListItem(index, updatedItem) {
    if (list[index]) {
        list[index] = { ...list[index], ...updatedItem };
        return true;
    }
    return false;
}

export { addToList, getList, editListItem };
