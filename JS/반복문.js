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

// 이중 for문 사용 (for문 안에 포문)
// 구구단 2단 ~ 9단 출력하기

for (let i = 2; i < 10; i++) {
  console.log(`-------------${i}단---------------`);
  for (let j = 1; j < 10; j++) {
    // console.log(i, "x", j, "=", i * j);
    console.log(`${i}x${j}=${i * j}`);
  }
}

// while ///
let n1 = 1; //while 내부에서 사용할 변수의 초기화
// while(조건){
//조건이 참일 때 실행할 문장
// }

while (n1 <= 5) {
  console.log(n1);
  n1++;
}

//10부터 6까지만 출력
let n2 = 10;

while (n2 > 5) {
  console.log(n2);
  n2--;
}

// while과 if를 사용해서 1 ~ 10 까지의 짝수 출력

let n3 = 1;
while (n3 < 11) {
  if (n3 % 2 === 0) {
    console.log(n3);
  }
  n3++;
}

/* while과 무한루프 */
let n4 = 1;
while (true) {
  console.log(n4);
  n4++;
  if (n4 === 11) {
    break;
  }
}

// confirm
// 확인 -> true 반환
// 취소 -> false 반환
let n5 = 0;
while (confirm("계속 진행?")) {
  n5++;
  alert(n5 + "번째 alert");
}

// continue
// 1~10 홀수의 합 구하기
// break
// 반복문에서 반복을 멈추고 즉시 탈출
// 1~10 홀수의 합 구하기\

let sum2 = 0;
for (let i = 1; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum2 += i;
}
console.log(sum2);

let sum3 = 0;
for (i = 0; i < 101; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    sum3 += i;
  }
}
console.log(sum3);
