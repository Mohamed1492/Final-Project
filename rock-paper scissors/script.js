const computerchoice = document.getElementById("comp-choice");
// console.log(computerchoice);
const userchoice = document.getElementById("user-choice");
// console.log(userchoice);
const result = document.getElementById("result");
// console.log(result);
var choicepossibilities = document.querySelectorAll(".case");
// console.log(choicepossibilities)

choicepossibilities.forEach((choicepossibilities) =>
  choicepossibilities.addEventListener("click", (e) => {
    let el = e.target;
    userchoice.innerHTML = el.innerHTML;
    result.classList.add("active");  setTimeout(() => {
      result.classList.remove("active");
    }, 500);
    randomchoice();
    afficheresult();
    // console.log(afficheresult());
  })
);

function randomchoice(){
let i= Math.floor((Math.random() * 11)%3);
    document.getElementById("comp-choice").innerHTML = choicepossibilities[i].innerHTML;
}

function afficheresult(){
  if (userchoice.innerHTML === computerchoice.innerHTML){
    result.innerHTML= "<span style='color: orange;'>It's Draw</span>";
  }
  if (userchoice.innerHTML === "Rock" && computerchoice.innerHTML === "Paper"){
    result.innerHTML= "<span style='color: red;'>you lose</span>";
  }
  if (userchoice.innerHTML === "Rock" && computerchoice.innerHTML === "Scissors"){
    result.innerHTML= "<span style='color: green;'>you win</span>";
  }
  if (userchoice.innerHTML === "Paper" && computerchoice.innerHTML === "Scissors"){
    result.innerHTML= "<span style='color: red;'>you lose</span>";r
  }
  if (userchoice.innerHTML === "Paper" && computerchoice.innerHTML === "Rock"){
    result.innerHTML= "<span style='color: green;'>you win</span>";
  }
  if (userchoice.innerHTML === "Scissors" && computerchoice.innerHTML === "Rock"){
    result.innerHTML= "<span style='color: red;'>you lose</span>";result.classList.add("active");  setTimeout(() => {
      result.classList.remove("active");
    }, 10000000000);
  }
  if (userchoice.innerHTML === "Scissors" && computerchoice.innerHTML === "Paper"){
    result.innerHTML= "<span style='color: green;'>you win</span>"; 
  }


  }
