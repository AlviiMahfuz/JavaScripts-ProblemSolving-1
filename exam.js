// Problem 01: Sum of Natural Numbers
let n = 5;
let sum = 0;

for (let i =1; i <=n; i++){
    sum += i;
}

console.log(sum);

// 1 end 






// Problem 02: Find Even and Odd Numbers
let numbers = [10, 15, 20, 25, 30, 35, 40];
let even = 0;
let odd = 0; 

for(let num of numbers){
    if(num % 2 === 0){
        even++ ;
    }
    else{
        odd++ ;
    }
}

console.log(`Even count : ${even}` )
console.log(`Odd count : ${odd}`)
// 2 end






// Problem 03: Factorial of a Number
let numb = 5;
let factorial =1;

for(let i=1; i <= numb; i++){
    factorial *= i;
}
console.log(`factorial : ${factorial}`)
// 3 end







// Problem 04: Find Prime Number

function checkPrime(n){

    if(n <=1){
        return "0/1 not a prime number"
    }

    for(i=2; i <n ; i++){
        if(n%i ===0){
            return "not a prime number"
        }
    }
    return "it's a prime number"
}
console.log(`Check prime number: ${checkPrime(7)}`)
console.log(`Check prime number: ${checkPrime(10)}`)
// 4 end






// Problem 05: Multiplication Table
let mult = 5;
let resultM = "";

for(let i =1; i <=10; i++){
    resultM += `${mult}x ${i} = ${mult * i}  \n` 
}
console.log(resultM)
// 5 end





// Problem 06: Reverse a String
let str = 'hello';
let reverseStr = '';

for(let i = str.length - 1; i >=0; i--){
    reverseStr += str[i];
}
console.log(`character reverse : ${reverseStr}`)


// problem 6 - for of
let strr = 'hello';
let reverseStrr = '';

for(let char of strr){
    reverseStrr = char + reverseStrr ;  //reverseStrr + char ,,,,eta ultai disi
}
console.log(`character reverse : ${reverseStrr}`)
// 6 end





// Problem 07: Find the Largest Number in Array
let numberss = [10, 45, 20, 50, 80, 90, 30];
let largest = numberss[0];

for(let large of numberss){

    if(large > largest){
        largest = large;
    }
}
console.log(`Largest number : ${largest}`)
// 7 end





// Problem 08: Find Square of a Number
function squre(x){
    return x * x;
}
console.log("Squre of Number :" + ' ' + squre(5))
// 8 end





// Problem 09: Positive, Negative or Zero
let g = 9 ;

if(g > 0){
    console.log('Positive Number')
}else if (g < 0){
    console.log('Negative Number')
} else{
    console.log('Zero')
}
// 9 end




// Problem 10: Check Eligibility for Voting
function ageForVote (age){
    if(age >=18){
        return 'Eligible for Vote'
    }
    else{
        return 'Not Eligible for Vote'
    }
}
console.log(`You are : ${ageForVote(17)}`)
console.log(`You are : ${ageForVote(19)}`)
// 10 end


// Mahfuz 