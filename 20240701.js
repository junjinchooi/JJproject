// function printPattern(lines) {
//     let pattern = '';

//     for (let i = 1; i <= lines; i++) {
//         let numStars = i <= Math.ceil(lines / 2) ? i : lines - i + 1;
//         for (let j = 1; j <= numStars; j++) {
//             pattern += '*';
//         }
//         pattern += '\n';
//     }

//     console.log(pattern);
// }

// // Example usage:
// printPattern(7);

function printPattern() {
    let pattern = '';

for (let i = 1; i <= 5; i++) {                      //i = 1,2,3,4,5,
        let numStars = i 
        // i <= Math.ceil(5 / 2) ? i : 5 - i + 1;   //삼항 연산자) 조건?참:거짓 
        if(i <= Math.ceil(5/2)) {                   //Math.ceil: 소수점 올림 3기준으로 큰지 작은지  
            console.log("i");           
        }
        else{                                       //4, 5 
            console.log("5-i+1")
        }
            for (let j = 1; j <= numStars; j++) {   // pattern = pattern + * 
            pattern += '*';                         // i를 *로 바꾸기 
            }
            pattern += '\n';                        // pattern = pattern +줄바꿈 
    }

    console.log(pattern);
}

// Example usage:
printPattern();