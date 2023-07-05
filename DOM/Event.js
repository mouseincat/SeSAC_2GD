const btn1 = document.querySelector(".btn--black");
const btn2 = document.querySelector(".btn--green");
const btn3 = document.querySelector(".btn--blue");
const btn4 = document.querySelector(".btn--red");

btn1.addEventListener("click", function () {
  alert("버튼 1을 클릭하셨군요");
});

const container = document.getElementById("container");

function changeColor() {
  const divs = document.querySelectorAll("#container div");
  for (let div of divs) {
    div.style.backgroundColor = "skyblue";
  }
  //맨 마지막 요소만 빨강색으로 변경
  div[divs.length - 1].style.backgroundColor = "red";
}

btn3.addEventListener("click", changeColor);

//
function changeBtnColor() {
  this.style.backgroundColor = "yellow";
  this.style.color = "#000";
}
btn4.addEventListener("click", changeBtnColor);
