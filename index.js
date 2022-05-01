// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

function mondayWork(toDo = "go to the office") {
    return `This Monday, I will ${toDo}.`
}



function wrapAdjective(result = "*" && "||") {
    return function(greeting, emphatic = "a hard worker") {
        return `${greeting = "You are"} ${result}${emphatic}${result}!`;
    }
}