let list = [];
 function createListItem(title, checklist = []) {
    return {
        title,
        checklist
        
    };
}

function addToList(title, checklist) {
    const exists = list.some(item => item.title.toLowerCase() === title.toLowerCase());
    if (exists) {
        alert("A project with this title already exists.");
        return false;
    }
    const newItem = createListItem(title, checklist);
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

function addToChecklist(project, itemToAdd){
    const projectItem = list.find(item => item.title === project)
    const itemIndex = list.findIndex(item => item.title === project)

    let newChecklist = projectItem.checklist

    newChecklist.push(itemToAdd)

    const orderedChecklist = [...newChecklist].sort((a,b) => Number(b.priority) - Number(a.priority))

    list[itemIndex].checklist = orderedChecklist
    console.log(list)
}

export { addToList, getList, editListItem, addToChecklist, createListItem };
