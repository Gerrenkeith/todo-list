function getPrioritySymbol(priority) {
    if (priority === "high") {
        return "🔴";
    } else if (priority === "medium") {
        return "🟠";
    } else {
        return "🟢";
    }
}

export default getPrioritySymbol;