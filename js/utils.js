function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
      rectangle2.position.x &&
    rectangle1.attackBox.position.x <=
      rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
      rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
  );
}

function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId);
  document.querySelector("#displayText").style.display = "flex";
  if (player.health === enemy.health) {
    document.querySelector("#displayText").textContent = "Tie";
    document.querySelector("#displayText").style.fontSize = "40px";
  } else if (player.health > enemy.health) {
    document.querySelector("#displayText").textContent = "Player 1 Wins";
    document.querySelector("#displayText").style.fontSize = "40px";
  } else if (enemy.health > player.health) {
    document.querySelector("#displayText").textContent = "Player 2 Wins";
    document.querySelector("#displayText").style.fontSize = "40px";
  }
}

let timer = 60;
let timerId;
function decreaseTimer() {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000);
    timer--;
    document.querySelector("#timer").textContent = timer;
  }
  if (timer === 0) {
    determineWinner({ player, enemy, timerId });
  }
}
