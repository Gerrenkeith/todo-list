const lists = (title, description, dueDate, priority, notes, checklist) => {

    return { title, description, dueDate, priority, notes, checklist};
};

function addToList(title, description, dueDate, priority, notes, checklist) {
    const newItem = lists(title, description, dueDate, priority, notes, checklist);
    list.push(newItem);
}

let list = []
addToList("Mow the lawn", "Mow the front and back yard", "2023-10-01", "high", "Use the new mower", ["front yard", "back yard"]);



export default list;