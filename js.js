let wins = 0;
let losses = 0;
let ties = 0;

const emojis = {
  rock: '🪨',
  paper: '📄',
  scissors: '✂️'
};

function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let outcome = '';
  if (playerChoice === computerChoice) {
    outcome = "It's a tie!";
    ties++;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    outcome = "You win!";
    wins++;
  } else {
    outcome = "You lose!";
    losses++;
  }

  document.getElementById('result').innerHTML = `
    You chose ${emojis[playerChoice]} <br>
    Computer chose ${emojis[computerChoice]} <br>
    <strong>${outcome}</strong>
  `;

  document.getElementById('score').textContent =
    `Wins: ${wins} | Losses: ${losses} | Ties: ${ties}`;
}