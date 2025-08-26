function getPrioritySymbol(priority) {
    if (priority === "2") {
        return "🔴";
    } else if (priority === "1") {
        return "🟠";        
    } else if (priority === "0") {
        return "🟢";
    }else {
        return null
    }
}

export default getPrioritySymbol;