import { getList } from "./lists.js";

const list = getList()
const checkboxChangeHandler = (input, listItem, span, index, indexOfItem) => {
                if(input.checked){
                    listItem.completed = true;

                    list[index].checklist[indexOfItem].completed = true;
                    span.style.textDecoration = 'line-through'
                } else {
                    listItem.completed = false;
                   list[index].checklist[indexOfItem].completed = false;
                    span.style.textDecoration = 'none'
                }
        }

function isComplete(input, listItem, span){
     if(listItem.completed === true){
                input.checked = true;
                span.style.textDecoration = 'line-through';
            }
}

export { checkboxChangeHandler, isComplete }; 