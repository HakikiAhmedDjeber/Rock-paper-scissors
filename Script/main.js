const botChosen = document.getElementById("bot");
const youChosen = document.getElementById("you");
const selectList = document.querySelectorAll(".select i");
const reslut = document.getElementById("result");
let youCount = 0,
  botCout = 0;
const statusList = ["rock", "paper", "scissors"];
selectList.forEach((ele) => {
  ele.addEventListener("click", () => {
    youChosen.innerHTML = botChosen.innerHTML = "";
    // YOU
    let newElement = document.createElement("i");
    newElement.className = ele.classList.toString();
    newElement.id = ele.id;
    youChosen.append(newElement);
    // BOT
    let newBotChose = document
      .getElementById(`${statusList[Math.trunc(Math.random() * 3)]}`)
      .cloneNode(true);
    botChosen.append(newBotChose);
    // tests for the reslut
    if (newElement.id == "rock" && newBotChose.id == "paper") {
      botCout++;
    } else if (newElement.id == "paper" && newBotChose.id == "rock") {
      youCount++;
    } else if (newElement.id == "rock" && newBotChose.id == "scissors") {
      youCount++;
    } else if (newElement.id == "scissors" && newBotChose.id == "rock") {
      botCout++;
    } else if (newElement.id == "scissors" && newBotChose.id == "paper") {
      youCount++;
    } else if (newElement.id == "paper" && newBotChose.id == "scissors") {
      botCout++;
    }
    reslut.innerText = `${youCount} - ${botCout}`;
  });
});
