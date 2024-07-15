// function printPattern(lines) {
//     let pattern = '';

//     for (let i = 1; i <= lines; i++) {
//         let numStars = (i <= Math.ceil(lines / 2) ? i : lines - i + 1);
//         for (let j = 1; j <= numStars; j++) {
//             pattern += '*';
//         }
//         pattern += '\n';
//     }

//     console.log(pattern);
// }

// // Example usage:
// printPattern(7);
/////////////////////////////////////////////////////////////////////////////////
//마름모 반쪽 
//오류 코드
//1. 삼항연산자 조건문으로 풀어서 쓸때 변수와의 관계를 이해하지 못했음-연산자 우선순위(= , 삼항연산자))
//2. i를 numstars에 집어넣는것! = 콘솔 로그에 numstars(변수)를 찍었어야 함 (numstars와 i가 동등관계라고 생각했다)
//   코딩에서 둘이 서로 같은 건 ==, 집어넣는건 =    
//   할당(=) 비교(==), 엄격한 동등 비교(===)
//  console.log("i") = 당연히 문자열 "i"만 출력됨
//console.log를  pattern 한번에 찍은것 - 줄바꿈 필요 !
//3. if안의 조건문인 true 인지 false인지 구분하기 위에 about:blank 콘솔 창에 찍어볼 것 
// function printPattern() {
//     let pattern = '';

// for (let i = 1; i <= 5; i++) {                      //i = 1,2,3,4,5,
//         let numStars = i;                           
//         // i <= Math.ceil(5 / 2) ? i : 5 - i + 1;   //삼항 연산자) 조건?참:거짓 
//         if(numStars <= Math.ceil(5/2)) {                   //Math.ceil: 소수점 올림 3기준으로 큰지 작은지  
//             console.log("i");           
//         }
//         else{                                       //4, 5 
//             console.log("5-i+1")
//         }
//             for (let j = 1; j <= numStars; j++) {   // pattern = pattern + * 
//             pattern += '*';                         // i를 *로 바꾸기 
//             }
//             pattern += '\n';                        // pattern = pattern +줄바꿈 
//     }

//     console.log(pattern);
// }

// // Example usage:
//printPattern();
///////////////////////////////////////////////////////////////////////////////////
//마름모 반쪽 
//성공 코드 
// function printPattern() {
//     let pattern = '';

//     for (let i = 1; i <= 5; i++) {
//         let numStars = i; 
//         if(numStars <= Math.ceil(5 / 2)){
//             numStars= i;
//             console.log(numStars); 
//             console.log("---------------------------")
//         }
//         else{
//             numStars = 5-i+1;
//             console.log(numStars); 
//         }
//         //let numStars = i <= Math.ceil(lines / 2) ? i : lines - i + 1;
//             for (let j = 1; j <= numStars; j++) {
//                 pattern += '*';
//             }
//             pattern += '\n';
//     }

//     console.log(pattern);
// }

// // Example usage:
// printPattern();
////////////////////////////////////////////////////////
// 마름모 
// let n = 5; 
// for (let i = 1; i < 2 * n; i++) {
//     let stars = i <= n ? i : 2 * n - i; 
//     console.log(' '.repeat(n-stars) + '*'.repeat(2*stars-1)); 
// }
//console.log를 i = 1~9 일때, 총 9번 찍음(줄바꿈 불필요!) 자동으로 줄바꿈 됨
//let i = 1; 
// if(0.0){
//     console.log("true");
//     console.log(true);
// }else{
//     console.log(false);
// }
console.log('a'.repeat(10));
console.log('a'.repeat(10).split('a'));
//a를 찾아야하는데 없으니까 빈배열''이 찍힘

console.log('bca'.repeat(3));
console.log('bca'.repeat(3).split('bc'));
//bc 앞에 없으니까 공백, a,a,a가 찍힘
console.log('bca'.repeat(3).split('a'));

// const str = "apple banana orange";

// const arr = str.split(" ");

// document.writeln(arr.length); // 3
// document.writeln(arr[0]); // apple
// document.writeln(arr[1]); // banana
// document.writeln(arr[2]); // orange

// //Note: 빈 문자열이 주어졌을 경우 split()은 빈 배열이 아니라 빈 문자열을 포함한 배열을 반환합니다.
// 문자열과 separator가 모두 빈 문자열일 때는 빈 배열을 반환합니다.
//     //구분자와 원본 문자열이 동일할 경우)구분자와 원본 문자열이 동일할 경우 빈 문자열("")
//     두 개를 요소로 가지는 배열이
//     반환됩니다.
// const sentence = "반";
// const wordsArray = sentence.split("반");

// console.log(wordsArray);
// // 출력: ["", ""]

// const string1111 = 'hello my name is junjin'; 
// const arr1111 = string1111.split('n');
// console.log(arr1111);
// //[ 'hello my ', 'ame is ju', 'ji', '' ]

// const string2222 = 'hello my name is junjin '; 
// const arr2222 = string2222.split('n');
// console.log(arr2222);
// // ????????n





// const string = 'hello my name is junjin'; 

// const arr0 = string.split();        //아무것도 전달안함
// const arr1 = string.split(' ');     //공백(공백이나 구분기호는 하위 문자열에 포함X)
// const arr2 = string.split('');      //빈문자열-어디에나 있음, 배열 내부에서 분리된 모든 문자 얻음
// const arr3 = string.split('n');     //구분자 seperator
// const arr4 = string.split('m', 2);   //제한(분할 수를 주어진 숫자로 제한)
// const arr5 = string.split('m', 0);

// console.log(arr3);
// // console.log(arr4);
// // console.log(arr5);

