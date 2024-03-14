const playerScore = document.querySelector(".player-point");
const computerScore = document.querySelector(".computer-point");
const command = document.querySelector(".command");
const labels = document.querySelector(".labels");
const textmuted = document.querySelector(".text-muted");
const buttons = document.querySelectorAll("button")
const body = document.querySelector("body");
const h2 = document.querySelector("h2");

let playerChoice = ""


buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
        playerChoice = item.className
        playRound(playerChoice, getComputerChoice())
        if (playerScore.textContent == 5) {
            h2.textContent = "You Won!"
            command.remove()
            labels.remove()
            textmuted.remove()
            const button = document.createElement("button")
            button.textContent = "Play Again"
            button.className = "play-again btn btn-primary"
            body.appendChild(button)
            button.addEventListener('click', () => {
                location.reload()
            })
        } else if (computerScore.textContent == 5) {
            h2.textContent = "You Lost!"
            command.remove()
            labels.remove()
            textmuted.remove()
            const button = document.createElement("button")
            button.textContent = "Play Again"
            button.className = "play-again btn btn-primary"
            body.appendChild(button)
            button.addEventListener('click', () => {
                location.reload()
            })
        }
        
    })
})

function getComputerChoice() {
    const compChoice = Math.floor(Math.random() * 3) + 1
    switch (compChoice) {
        case 1:
            return "paper"
        case 2:
            return "scissor"
        default:
            return "rock"
    }
}

function playRound(playerChoice, compChoice) {
    if (playerChoice == compChoice) {
        alert("Tie!")
    } else if (playerChoice == "rock" && compChoice == "paper") {
        alert("You Lost! Paper beats Rock")
        computerScore.textContent++
    } else if (playerChoice == "paper" && compChoice == "scissor") {
        alert("You Lost! Scissor beats Paper")
        computerScore.textContent++
    } else if (playerChoice == "scissor" && compChoice == "rock") {
        alert("You Lost! Rock beats Scissor")
        computerScore.textContent++
    } else {
        alert(`You Won! ${playerChoice} beats ${compChoice}`)
        playerScore.textContent++
    }
}