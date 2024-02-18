function playGame(playerChoice) {
    const choices = ['snake', 'water', 'gun'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const resultElement = document.getElementById('result');
    let computerScore = document.getElementById('computerScore');
    let userScore = document.getElementById('userScore');
  
        if (playerChoice === computerChoice) {
            resultElement.innerHTML = `
            <b>This round is a draw!</b>
            <p>Your choice : <b>${playerChoice}</b></p>
            <p>Computer choice : <b>${computerChoice}</b></p>
            `;
            computerScore.textContent = textContent;
            userScore.textContent=textContent;
          } else if (
            (playerChoice === 'snake' && computerChoice === 'water') ||
            (playerChoice === 'water' && computerChoice === 'gun') ||
            (playerChoice === 'gun' && computerChoice === 'snake')
          ) {
            resultElement.innerHTML = `
            <b>You win this round!</b>
            <p>Your choice : <b>${playerChoice}</b></p>
            <p>Computer choice : <b>${computerChoice}</b></p>
            `
            userScore.textContent = parseInt(userScore.textContent)+1
            computerScore.textContent=computerScore.textContent;
          } else {
            resultElement.innerHTML = `
            <b>You lose this round!</b>
            <p>Your choice : <b>${playerChoice}</b></p>
            <p>Computer choice : <b>${computerChoice}</b></p>
            `
            computerScore.textContent = parseInt(computerScore.textContent)+1
            userScore.textContent=userScore.textContent;
          }

          if(parseInt(computerScore.textContent)==5|| parseInt(userScore.textContent)==5){
            if(parseInt(computerScore.textContent)==5){
              document.getElementById("computer").innerHTML = `
              <div class="final-card">
              <h1> Game Over!</h1>
              <h2><i class="fa-solid fa-computer"></i> wins the game!!</h2>
              <h3>Wanna try again? Reload the page!!!</h3>
              </div>
              `
              document.getElementById("user").style.display="none"
              document.querySelector(".play-control").style.display="none"
              document.getElementById("result").style.display="none"
          }
          else{
            document.getElementById("user").innerHTML = `
              <div class="final-card">
              <h1> Game Over!</h1>
              <h2><i class="fa-solid fa-user"></i> wins the game!!</h2>
              <h3>Try to beat it again! Reload the page!!!</h3>
              </div>
              `
              document.getElementById("computer").style.display="none"
              document.querySelector(".play-control").style.display="none"
              document.getElementById("result").style.display="none"
          }
          computerScore.textContent='0'
          userScore.textContent='0'
    }
  }
