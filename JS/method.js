///================여기부턴 배열 method
let arr1 = [1, 2, 3, 4, 5];
arr1.push("six");
arr1.push("seven");
console.log(arr1);

arr1.pop();
console.log(arr1.pop());
console.log(arr1);

let arr2 = ["quakka", "puppy", "rabbit", "hamster"];
arr2.unshift("고양이");
arr2.unshift("쥐");
console.log(arr2);
console.log(arr2.shift());
console.log(arr2);

arr2 = ["quakka", "puppy", "rabbit", "hamster"];

console.log(arr2.includes("puppy"));
console.log(arr2.includes("cat"));

console.log(arr2.length);
console.log(arr2.indexOf("puppy"));

arr1 = [1, 2, 3, 4, 5];
arr1.reverse();
console.log(arr1);

//배열을 문자열로
let str3 = arr1.join("-000");
console.log(str3);

//반복
let arr3 = [6, 7, 8, 9, 10];
let alphabets = ["a", "b", "c", "d", "e", "f"];

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

for (let number of arr3) {
  console.log(number);
}

for (let alphabet of alphabets) {
  console.log(alphabet);
}

/* forEach 메소드
배열.forEach(function(요소, 인덱스, 배열)){})
배열.forEach((value, index, array)=>{})
*/

arr3.forEach(function (number, index) {
  console.log(number);
  console.log(index);
  console.log(arr3);
});

alphabets.forEach((alphabet, i, array) => {
  console.log(alphabet);
  console.log(i);
  console.log(array);
});

// map, filter, find!
/* 
1. map >> 배열 내의 모든 원소에 대해 함수 호출한 결과를 모아서 새로운 배열 반환
2. filter >> 조건을 만족하는 요소들을 "배열"로 반환
3. find >> 조건을 만족하는 요소 중 첫번째 "값" 반환

매개변수로 익명함수 (함수표현식, 화살표함수)
배열 자체를 변경시켜주지 않기 때문에 새로운 변수에 저장해서 사용!
*/

/* map */
// [].map(function(value, index, arr){})
let arr4 = [1, 2, 3, 4, 5];
arr4.map((num) => num * 2);

console.log(arr4);

const multiArr = arr4.map((el) => el * 2);
console.log(multiArr); // 2, 4, 6, 8, 10

/* filter */
arr2 = ["quakka", "puppy", "rabbit", "hamster"];
arr2.filter(function (el) {
  return el.length >= 6;
});
console.log(arr2);

let six = arr2.filter(function (el) {
  return el.length >= 6;
});
console.log(six);

/* find */
let findResult = multiArr.find(function (el) {
  return el > 7;
});
console.log(findResult);

/* 화살표 함수 */
// 중괄호를 쓰지 않아도 됨!
// 중괄호를 쓰지 않았을 때는 return이 필요 없음!
let findResult2 = multiArr.find((el) => el > 7);
console.log(findResult2);

/* for in */
const areaNum = {
  Seoul: "02",
  Incheon: "032",
  Daejeon: "042",
  Busan: "051",
  Ulsan: "052",
  Daegu: "053",
  Gwangju: "062",
  Jeju: "064",
};

//  const arr = ["a","b","c","d"];;
//   arr[0] =="a"
for (let area in areaNum) {
  console.log(area);
  //   areaNum.Seoul
  //  areaNum["Seoul"] -> 대괄화 접근법을 이용해서 value에 접근
  console.log(areaNum[area]);
}
