console.log(document);
console.log(document.head);

// getElementById
console.log(document.getElementById("red"));
console.log(document.getElementById("green"));

//getElementsByClassName
console.log(document.getElementsByClassName("pink"));
console.log(document.getElementsByClassName("pink")[1]);

//getElementsByTagName
console.log(document.getElementsByTagName("div")[5]);

//getElementsByName
console.log(document.getElementsByName("id"));

// querySelector
/* CSS애서 사용했던 선택자를 이용해서 요소 선택!
선택자와 일치하는 첫번째요소를 반환 */
console.log(document.querySelector(".pink"));
console.log(document.querySelector(".others"));
console.log(document.querySelector("#green"));
console.log(document.querySelector("div"));
console.log(document.querySelector('[name="id"]'));
//querySelectorAll
const divs = document.querySelectorAll("div");
console.log(divs);

const pinks = document.querySelectorAll(".pink");
console.log(pinks);

for (let i = 0; i < pinks.length; i++) {
  console.log(pinks[i]);
}

//for of 문 활용해보기
for (let pink of pinks) {
  console.log(pink);
}
