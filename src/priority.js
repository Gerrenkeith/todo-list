function getPrioritySymbol(priority) {
    if (priority === "3") {
        return "🔴";
    } else if (priority === "2") {
        return "🟠";        
    } else if (priority === "1") {
        return "🟢";
    }else {
        return null
    }
}

export default getPrioritySymbol;