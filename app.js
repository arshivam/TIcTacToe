let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let newGameBtn = document.querySelector("#new-btn");
let msgContaniner = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true; //PlayerX, PlayerO

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //Player O
      box.innerText = "O";
      turnO = false;
    } else {
      //Player X
      box.innerText = "X";
      turnO = true;
    }
    // To disable the button onces used
    box.disabled = true;
    // To add differnt color for Player O
    if (box.innerText === "O") {
      box.classList.add("blue");
    } else {
      box.classList.remove("blue");
    }
    checkWinner();
  });
});

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContaniner.classList.add("hide");
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations Winner is ${winner}`;
  msgContaniner.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
