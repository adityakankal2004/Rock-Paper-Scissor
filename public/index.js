//sounds
let winSound = document.getElementById("win");
let loseSound = document.getElementById("lose");
let tieSound = document.getElementById("tie");
let playerChoice = 0;

// alert("Keep your volume down for game sound");

//Game audio playing
let game_sound = document.getElementById("game-sound");

game_sound.muted = true;
game_sound.loop = true;
game_sound.play().catch(err => console.log("Autoplay is blocked due to new policy :",err));

document.addEventListener("click",()=>{
    game_sound.muted = false;
    // game_sound.play();
},{once:true});

//Click functionality to select paper
let paper = document.getElementsByClassName("paper");
for(let i=0;i<paper.length;i++){
paper[i].addEventListener("click",()=>{
    console.log("Paper Selected");
    let me = document.getElementsByClassName("me")[0];
    let paper_me = me.src = "assets/paper.png";
    playerChoice = 2;
    
    
});

}

//Click functionality to select rock
let rock = document.getElementsByClassName("rock");

for(let i=0;i<rock.length;i++){
    rock[i].addEventListener("click",()=>{
        console.log("Rock selected");
        let me = document.getElementsByClassName("me")[0];
        
        let rock_me = me.src = "assets/rock.png";
        playerChoice = 1;
        
    })
}

//Click funtionality for scissors

let scissors = document.getElementsByClassName("scissors");

for(let i=0;i<scissors.length;i++){
    scissors[i].addEventListener("click",()=>{
        console.log("Scissors selected");
        let me = document.getElementsByClassName("me")[0];
      
        let scissors_me = me.src = "assets/scissors.png";
        playerChoice = 3;
    })
}


//Start button functionality
let start = document.getElementsByClassName("funky-button");

for(let i=0;i<start.length;i++){
    start[i].addEventListener("click",()=>{



        if (playerChoice === 0) {
            alert("⚔️ Choose Rock, Paper, or Scissors before starting!");
            return;
        }
        console.log("Game started");    
        
        //UI-cyclying logic

        let opponent = document.getElementsByClassName("opponent")[0];
        let moves = [
            "assets/rock_opp.png",
            "assets/paper.png",
            "assets/scissors_opp.png"
        ];

        //start cyclying
        let index = 0;
        let cycle = setInterval(()=>{
            opponent.src = moves[index];
            index = (index + 1) % moves.length;
        },200);

        setTimeout(()=>{
            clearInterval(cycle);

            let randNum = Math.floor(Math.random() * 3) + 1;
            opponent.src = moves[randNum - 1];

        //game Logic
        if(playerChoice === randNum){
            tieSound.play();
            setTimeout(()=>{
                // alert("Tie");
                let result = document.getElementById("result");
                result.innerText = "Tie";
            },1000);
        } else if (
            (playerChoice === 1 && randNum === 3) ||
            (playerChoice === 2 && randNum === 1) ||
            (playerChoice === 3 && randNum ===2)
        ){
            winSound.play();
            setTimeout(()=>{
                // alert("Win");
                let result = document.getElementById("result");
                result.innerText = "Win";
            },1000);
        } else{
            loseSound.play();
            setTimeout(()=>{
                // alert("You lose");
                let result = document.getElementById("result");
                result.innerText = "Lose";
            },1000);
        }
    },1500);
    });
}

        

        //generate random number
        // let randNum = Math.floor(Math.random() * 3) + 1;
        // console.log(randNum);
        // let opponent = document.getElementsByClassName("opponent")[0];

        // if (randNum == 1) {
        //     opponent.src = "assets/rock_opp.png"; 
        // }
        // else if (randNum == 2){
        //     opponent.src = "assets/paper.png";  
        // }
        // else if (randNum == 3){
        //     opponent.src = "assets/scissors_opp.png";  
        // }

        


