/*
forans
for(변수 초기화; 조건식 (어디까지 증가? 감소?); 증감) {
    반복할 코드
}

index ++; index = index +1; index+=1;
*/

for (let i = 0; i < 10; i = i + 1) {
  console.log("안녕하세요");
}

for (let i = 0; i < 10; i += 2) {
  console.log(`${i + 1}번째`);
}

//1~5까지 출력
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
for (let i = 1; i < 6; i++) {
  console.log(i);
}
for (let i = 0; i < 5; i++) {
  console.log(i);
}
for (let i = 5; i > 0; i--) {
  console.log(i);
}

//1~n까지 더하는 프로그램 만들기
let n = 10; //5
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum);

//배열과 for문 같이 써보기
let fruits = ["사과", "망고", "수박", "바나나"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//10,000까지의 숫자 중에서 13의 배수이면서 홀수인 숫자를 찾아 봅시다.
for (let i = 1; 13 * i <= 10000; i += 2) {
  if ((13 * i) % 2 === 1) {
    console.log(13 * i);
  }
}
