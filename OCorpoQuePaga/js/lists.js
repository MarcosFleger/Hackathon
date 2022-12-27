   let exercArr = ["10 Push-Ups", "10 Squats - Bodyweight", "16 Plank Taps", "20 Jumping Jacks", "Knee Pushups", "Mountain Climbers for 2 minutes", "Plank With T-Rotation (switch sides after 1 minute)", "5 Burpees", "20 Jump Squats", "8 Reverse Lunges with Twists", "Dynamic Stretches — 1 minute", "Push-Ups — 1 minute" , "Plank Hold — 1 minute", "Squats — 1 minute", "Touch your - 1 min" ];

  let activArr = ["Cuddle your pet", "Call your mom", "Water your plants", "Clean your room", "Dance the Macarena", "Invite a friend to have a coffee", "Make your dinner, skip ask that pizza!", "Dance two of your favorite songs", "Go for a stroll around your neighborhood", "Hug a tree", "Have sex with your partner (or alone)", "Walk like a T-rex", "Lip-sync an António Variações song"  ];

  const exercMessage = document.getElementById("exerc");
  const activMessage = document.getElementById("activ");

   function getRandomExerc(){
        let counter = exercArr[Math.floor (Math.random() * exercArr.length)];
        exercMessage.innerHTML = "&#x2022; Exercise for a bit: " + `${counter}`;
        return counter;
    }

   function getRandomActiv(){
        let index = activArr[Math.floor(Math.random() * activArr.length)];
        activMessage.innerHTML = "&#x2022; Take on a random activity: " + `${index}`;
        return index;
    }


export {getRandomExerc, getRandomActiv};