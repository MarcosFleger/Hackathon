import * as pop from "./popupcontents.js"

export default class Timer {
    
    constructor(root) {

        
        root.innerHTML = Timer.getHTML();
        this.el = {
            hours: root.querySelector(".timer__part--hours"),
            minutes: root.querySelector(".timer__part--minutes"),
            seconds: root.querySelector(".timer__part--seconds"),
            control: root.querySelector(".timer__btn--control"),
            reset: root.querySelector(".timer__btn--reset"),
        
            halfH: root.querySelector(".halfHour"),
            oneH: root.querySelector(".oneHours"),
            twoH: root.querySelector(".twoHours"),
            threeH: root.querySelector(".threeHours")
          };

        this.interval = null;
        this.remainingSeconds = 0;

        this.updateInterfaceTime();
     
        this.el.halfH.addEventListener("click", () => {
            if(this.interval === null){
                this.start();
            }
            else{
                this.stop();
            }
            this.remainingSeconds = 2;
            this.updateInterfaceTime();
        })

        this.el.oneH.addEventListener("click", () => {
            if(this.interval === null){
                this.start();
            }
            else{
                this.stop();
            }
            this.remainingSeconds = 3600;
            this.updateInterfaceTime();
        })

        this.el.twoH.addEventListener("click", () => {
            if(this.interval === null){
                this.start();
            }
            else{
                this.stop();
            }
            this.remainingSeconds = 7200;
            this.updateInterfaceTime();
        })

        this.el.threeH.addEventListener("click", () => {
            if(this.interval === null){
                this.start();
            }
            else{
                this.stop();
            }
            this.remainingSeconds = 10800;
            this.updateInterfaceTime();
        })


    }

    updateInterfaceTime(){

        const minutes = Math.floor((this.remainingSeconds/60)%60);
        const hours = Math.floor(this.remainingSeconds / 3600);
        const seconds = this.remainingSeconds % 60;
        
        this.el.hours.textContent = hours.toString().padStart(2, "0");
        this.el.minutes.textContent = minutes.toString().padStart(2, "0");
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    }


    start(){
        
        this.interval = setInterval(() => {
            this.remainingSeconds--;
            this.updateInterfaceTime();

            
            if (this.remainingSeconds === 0) {
                pop.openPopup();

                const closeBtn = document.getElementById("closeBtn");
                closeBtn.addEventListener("click",pop.closePopup);
                this.stop();

                const shuffle = document.getElementById("shuffle");
                shuffle.addEventListener("click",pop.openPopup);
                this.stop();
            }

           
        }, 1000);
    }

    stop(){
        clearInterval(this.interval);

        this.interval = null;

        
    }

    static getHTML() {
        return `
        <img src="/Resources/relax.png" alt="man in bathtube" id="bath">
        <p>I will take a break in:</p>
        <br>
    </div>
    <div id="timebtn">
        <button class="tbtn halfHour">30m</button>
        <button class="tbtn oneHours">1h</button>
        <button class="tbtn twoHours">2h</button>
        <button class="tbtn threeHours">3h</button>
    </div>
    <div class="timer">
        <span class="timer__part timer__part--hours">00</span>
        <span class="timer__part">:</span>
        <span class="timer__part timer__part--minutes">00</span>
		<span class="timer__part">:</span>
		<span class="timer__part timer__part--seconds">00</span>
			
    </div>
   </div>
        `
    }
} 