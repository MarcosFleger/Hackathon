import * as list from "./lists.js"

const exercMessage = document.getElementById("exerc");
function printExerciseMessage(){
    exercMessage.innerHTML(list.getRandomExerc()) 
        
}

const activMessage = document.getElementById("activ");
function printActivMessage(){
    activMessage.innerHTML(list.getRandomActiv()) 
        
}

export {printExerciseMessage, printActivMessage}