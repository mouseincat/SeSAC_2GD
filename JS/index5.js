/*
String, Number, Array, Date, Math, Object, ....
*/

// Date 객체
// 시간, 날짜정보를 얻을 때 사용
let now = new Date();
console.log(now);
console.log(now.getFullYear(), "연도");
console.log(now.getMonth(), "월");
console.log(now.getDate(), "일");
console.log(now.getHours(), "시");
console.log(now.getMinutes(), "분");
console.log(now.getSeconds(), "초");
console.log(now.getMilliseconds(), "ms");
console.log(now.getDay(), "요일"); //0(일) ~6*(토))

//DAte

let Day = console.log(now.getDay());
//let Day = 0;
switch (Day) {
  case 0:
    console.log();
  case 6:
    console.log("오늘은 주말입니다.");
    break;

    console.log("오늘은 평일입니다.");
    break;
}

let Days = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];

console.log(Days[now.getDay()]);

//et now
let past = new Date(2020, 1, 13);
console.log(past);

/*Math*/
//수학적인 상수나 함수

console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);

//최대 최소값
console.log(Math.max(100, -1, 30, 20, 5));
console.log(Math.min(100, -1, 30, 20, 5));

console.log(Math.ceil(5.141)); //올림
console.log(Math.floor(5.141)); //내림
console.log(Math.round(5.141)); //반올림

//난수 생성 -> random number
console.log(Math.random()); //0~1<1
//0<10
console.log(10 * Math.random());
//
console.log(Math.round(10 * Math.random()));
console.log(20 + Math.round(2 * Math.random()));

// Object
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

console.log(Object.keys(areaNum));
console.log(Object.values(areaNum));
