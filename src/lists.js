let list = [];
 function createLists(title, description, dueDate, priority, notes = "", checklist = []) {
    return {
        title,
        description,
        dueDate,
        priority,
        notes,
        checklist
    };
}

function addToList(title, description, dueDate, priority, notes, checklist) {
    const exists = list.some(item => item.title.toLowerCase() === title.toLowerCase());
    if (exists) {
        alert("A project with this title already exists.");
        return false;
    }
    const newItem = createLists(title, description, dueDate, priority, notes, checklist);
    list.push(newItem);
    return true;
}

function getList() {
    return list;
}

export { addToList, getList };