const div1 = document.getElementById("div1");
/* 
1. 태그 내부 내용
 - innerText : 요소안의 텍스트를 가져오거나 수정
 - innerHTML : 요소안의 '코드'를 가져오거나 수정
 - textContent : innerText 처럼 텍스트 정보 표시
*/

console.log(div1.textContent);
console.log(div1.innerText);
console.log(div1.innerHTML);

div1.innerHTML = "여기는 <b>첫번째</b> div 태그입니다! &hearts;";
div1.innerText = "      여기는 <b>첫번째</b> div 태그입니다! &hearts;     ";
console.log(div1.innerText);
div1.textContent = "    여기는 <b>첫번째</b> div 태그입니다! &hearts;     ";
console.log(div1.textContent);

/* 2. 속성 */
/* 
 - setAttribute() : 속성값 설정
 - getAttribute() : 속성값 가져오기
 - 점(.)으로 접근하고 속성값도 변경할 수 있음
*/
// 메소드로 속성에 접근후 변경
const naver = document.getElementById("naver");
const pooh = document.querySelector("#pooh");
naver.setAttribute("href", "https://www.google.com");
naver.innerText = "구글";
console.log(pooh.getAttribute("src"));

// 점으로 속성에 접근후 변경
console.log(pooh.src);
console.log(pooh.alt);
pooh.alt = "푸 사진입니다!!!!";

/* 3. CSS 지정 */
const h1 = document.querySelector("h1");
const list = document.querySelectorAll("li");
// 3-1. style 속성 사용
// for (let li of list) {
//   console.log(li);
//   li.style.backgroundColor = "pink";
//   li.style.color = "#fff";
//   li.style.fontSize = "1.3rem";
// }

// 3-2. classList 사용
console.log(h1.classList);

h1.classList.add("add-h1");
// h1.classList.remove("add-h1");
console.log(h1.classList.contains("add-h1"));

/* if (h1.classList.contains("add-h1")) {
    h1.classList.remove("add-h1");
} else {
    h1.classList.add("add-h1");
}

h1.classList.toggle("add-h1");
*/
// li 태그(4개)에 friends 클래스 추가해보기

//*
const friends = document.getElementById("friends");
const tigger = document.getElementById("tigger");

console.log("------자식노드 접근-------");
console.log(friends.children);
console.log(friends.children[0]); //저장됨;

//부모 노드에 접근
console.log("-------부모 노드에 접근-----------");
console.log(tigger.parentNode);

//형제 노드에 접근
console.log("---형제 노드에 접근--------");
console.log(tigger.previousElementSibling);
console.log(tigger.previousElementSibling.nextElementSibling);

//
const container = document.querySelector(".container");

const p = document.createElement("p");
p.innnerText = "추가한 p";
p.style.fontWeight = "bold";
p.style.backgroundColor = "red";

console.log(p);

//4-2. 요소 추가
container.append(p); ///

const div = document.createElement("div");
const img = document.createElement("img");
const span = document.createElement("span");

img.src = "./img/quiz2.png";
img.alt = "피그렛";
span.innerText = "나는 피글렛이야";

container.append(img);
container.append(span);

const firstLi = document.querySelector("li");
console.log(firstLi);

//firstLi.remove();
friends.removeChild(firstLi);
