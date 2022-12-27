import { printActivMessage, printExerciseMessage } from "./controll.js";
import * as list from "./lists.js"

    let popup = document.getElementById("popup");

    let getAudio = document.getElementById("audio");
    let audio = new Audio("Resources/Antonio Variacoes - O Corpo E Que Paga.mp3");
    let donatePopup = document.getElementById("donatePopup");
    
    function openPopup(){

        popup.classList.add("open-popup");
        list.getRandomExerc();
        list.getRandomActiv();
        audio.play(); 
   }
   

    function closePopup(){
       popup.classList.remove("open-popup");
       audio.pause()
   }

  
   function openDonatePopup(){
    console.log("asas");
    donatePopup.classList.add("open-DonatePopup");
    audio.play(); 

   }
    


export { openPopup , closePopup , openDonatePopup };

