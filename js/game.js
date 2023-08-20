//First Game
let PlayGame=confirm("shall we play a rock,paper or Scissors?");
if(PlayGame){
    //play
    let PlayerChoice = prompt("Please enter rock, paper or scissors");
    if (PlayerChoice){
        let playerOne=PlayerChoice.trim().toLowerCase();
        if (playerOne==="rock" || playerOne=="paper"|| playerOne==="scissors"){
        
            let computerChoice=Math.floor(Math.random()*3+1);
            let computer=computerChoice===1?"rock"
            :computerChoice===2?"paper"
            :"scissors";
            let result=
            playerOne===computer
            ?"Tie game!"
            :playerOne==="rock" && computer==="paper"
            ?`playerOne:${playerOne}\nComputer:${computer}\nComputer wins`
            :playerOne==="paper" && computer==="scissors"
            ?`playerOne:${playerOne}\nComputer:${computer}\nComputer wins`
            :playerOne==="scissors" && computer==="rock"
            ?`playerOne:${playerOne}\nComputer:${computer}\nComputer wins`
            :`playerOne:${playerOne}\nComputer:${computer}\nPlayerOne wins`
            alert(result);
            let PlayAgain=confirm("Play Again");
            PlayAgain?location.reload():alert("Ok,thanks for playing")
        } else{
            alert("you didnt enter rock, paper or scissors")
        }
    }else{
        alert("I guess you changed your mind. Maybe next time");

    }

}else {
    alert("Ok, maybe next time");
}