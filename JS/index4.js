

/* 함수 선언문
function 함수이름(매개변수){
    함수내영;
}
함수이름은 camelCase를 이용!
*/
helloWorld1();
console.log("--------");
function helloWorld1() {
    console.log("hello world1");
}

hellowWorld1();

function hellowWorld2(){
    return "hellow world2"
}

/* return
-함수의 반환값, 함수 내부 코드의 '최종값'
*/
console.log(helloWord2());.

function add(num1, num2){
    console.log(num1+num2);
}
function add2(num1, num2){
    console.log("여기만 실행됩니다");
    return num1 + num2;
    console.log('여기는 실행되지 안아요');
}

add(5, 10);
console.log(add2(2, 3))

add(5,10);
add(3,2);
// helloWorld3
// 함수 표현식은 선언 이후에 호출해주어야 합니다.!
//함수 표현식
const hellowWorld3 = function(){
    console.log("hellowWorld3")
}
hellowWorld3();


// 화살표함수 == 함수표현식
const helloWorld4 = () => {
    return "hellow World 4!!!"
};


/* 매개변수가 있는 함수 */
function sayHello1(name){
 return "안녕하세요" + name + "님";
}

console.log(sayHello1("고루"));

function sayHello2(text, name){
    console.log('${text}!! ${name}님');
}

let 안녕 ="안녕하세요";
sayHello2(안녕, "allie);

let sayHello5 = function(text, name){
    return '${text}!! ${name}님';
}
console.log(sayHello5(안녕, "allie"));
let sayHello6 = (text, name) => {
    return '${text}!! ${name}님';
}