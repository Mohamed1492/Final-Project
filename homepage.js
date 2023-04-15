var btnlike = document.getElementsByClassName("fa-thumbs-up");
var btndislike = document.getElementsByClassName("fa-thumbs-down");
const colorlike = Array(btnlike.length).fill("white");
const colordislike = Array(btnlike.length).fill("white");


// bouton like
for (var i = 0; i < btnlike.length; i++) {
  btnlike[i].addEventListener("click", likeClicked);
  btndislike[i].addEventListener("click", dislikeClicked);
}

// let index = 0;
function likeClicked(e) {
  const btn = e.target;
  let index= Array.prototype.indexOf.call(btnlike, e.target);
  if(colordislike[index]== "red"){
    colordislike[index]="white";
    colorlike[index]= "darkgreen";
  }
  else if(colorlike[index]== "darkgreen"){
    colorlike[index]= "white";
  }
  else{
    colorlike[index]= "darkgreen";
  }
  btn.parentElement.style.backgroundColor = colorlike[index];
  const divelt = btn.parentElement.parentElement;
  const btncomplem = divelt.querySelector(".dislike");
  btncomplem.style.backgroundColor = colordislike[index];
  console.log(btncomplem);
}


function dislikeClicked(e) {
  const btn = e.target;
  let index= Array.prototype.indexOf.call(btndislike, e.target);
  if(colorlike[index]== "darkgreen"){
    colorlike[index]="white";
    colordislike[index]= "red";
  }
  else if(colordislike[index]== "red"){
    colordislike[index]= "white";
  }
  else{
    colordislike[index]= "red";
  }
  btn.parentElement.style.backgroundColor = colordislike[index];
  const divelt = btn.parentElement.parentElement;
  const btncomplem = divelt.querySelector(".like");
  btncomplem.style.backgroundColor = colorlike[index];
  console.log(btncomplem);
}