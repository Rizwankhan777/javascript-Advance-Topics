console.log("Hello world");
alert("Hello world");
document.write("Hello World");




// add .... numbers 


var number1 = parseInt(prompt("Enter the first number"));
var number2 = parseInt(prompt("Enter the second number"));

var sum = number1 + number2;
var subtract = number1 - number2;
var multi = number1 * number2;
var division = number1 / number2;

document.write(`Tha sum of ${number1} and ${number2} = `+sum);
document.write("<br>")
document.write(`Tha subtraction of ${number1} and ${number2} = `+subtract);
document.write("<br>")
document.write(`Tha multipliaction of ${number1} and ${number2} = `+multi);
document.write("<br>")
document.write(`Tha division of ${number1} and ${number2} = `+division);



// print the number from 1 to 10

for (i=1;i<=10;i++){
    document.write(i);
}


// Calculate the sum of numbers from 1 to 10


var sum = 0;
for(i=1; i<=10; i++){
    sum+=i;
    console.log(sum);
}







// print the odd numbers from 1 to 100

for(i=1; i<=100; i+=2){
    console.log(i);
}









// calculate the square of numer

var number = prompt("Enter the number");
function square(number){
    return number * number;
}
var result = square(number);
console.log(result)


// calculate the square root of number 

var number = prompt("Enter the number");

var result = Math.sqrt(number);
console.log(result);




// table of 7

for (i=1; i<=10; i++){
    var row = "7 * " + i + " = " + 7 * i;
    console.log(row);
}


// Create a function that will convert from Celsius to Fahrenheit

function celciusToFerenfheit(c){
    return c * 1.8 + 32;
}
var result = celciusToFerenfheit(37)
console.log(result);

// next program
function ferenheitTocelcious(f){
    return ( f - 32) / 1.8;
}
var result =ferenheitTocelcious(70);
console.log(result);

function celciusToFerenfheit(c){
    return c*1.8 + 32;
}

const row = celciusToFerenfheit(37);
console.log(row);





// Create a function that will convert from Fahrenheit to Celsius

function frenheitToCelcius(f){
    return (f-32)/1.8;
}
const row = frenheitToCelcius(70);
console.log(row);










// JavaScript program to swap two variables


var num1 =prompt("Enter the first number");
var num2 = prompt("Enter the second number");


console.log(`The value of num1 before swaping is ${num1}`)
console.log(`The value of num2 before swaping is ${num2}`)
 

var temp ;

temp = num1;
num1 = num2;
num2 =temp;

console.log(`The value of num1 after swaping ${num1}`)
console.log(`The value of num2 after swaping ${num2}`)









// Find the maximum number in an array 

var arr = [1,2,3,47,54,78,90,101,500];

function findMax(arr){
    var max = arr[0];

    for(i=1 ; i<arr.length ; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max
}

const result  = findMax(arr)
console.log(result)




// Reverse an array

var arr = [1,2,3,4,5];
console.log(arr)

function reverseArray(arr){
    var newarr = [];

    for(var i = arr.length - 1 ; i >=0; i--){
        newarr.push(arr[i]);
    }
    return newarr
}

const result = reverseArray(arr)
console.log(result)


// program to count the number of vowels in a string


const vowels = ["a","e","i","o","u"];

var string = prompt("Enter the string") 

function countVowels(string){
    var count = 0;

    for(let letter of string.toLocaleLowerCase()){
        if(vowels.includes(letter)){
            count++;
        }

    }
    return count

}
const result = countVowels(string)
console.log(result);





























// Find the maximum number in an array 

// function findMax(arr){
//     var max = arr[0];
//     for(i=0 ; i<arr.length; i++){
        
//             if(arr[i] > max){
//                 max = arr[i];
//             }
//     }
//     return max;
// }

// var arr = [2,-1,50,80,45,99,101,105];
// var max =findMax(arr);
// console.log(max);

// Reverse an array

// var arr = [1,2,3,4,5];
// console.log(arr);
// var ar2 = reverseArray(arr);
// console.log(ar2);

// function reverseArray(arr)
// {
//     var newarr = [];
    
//     for(var i = arr.length - 1; i >= 0 ; i--)
//     {
//         newarr.push(arr[i]);
//     }
    
//     return newarr;
// }




// console.log(arr);
// var ar2 = reverseArray(arr);
// console.log(ar2);

// function reverseArray(arr)
// {
//     var newarr = [];
    
//     for(var   i = arr.length - 1; i => 0 ; i--)
//     {
//         newarr.push(arr[i]);
//     }
    
//     return newarr;
// }





// how to square a number

// function square(num){
//     return num * num
// }
// const newSquare = square(5);
// console.log(newSquare);

// find the square root of the number






// var number = parseInt(prompt("Enter the number"));

// const result = Math.sqrt(number);

// console.log(result);

// JavaScript program to swap two variables

// let num1 = prompt("Enter the first number");
// let num2 = prompt("Enter the second number");

// console.log(`the value of a before swaping: ${num1}`)
// console.log(`the value of b before swaping: ${num2}`)


// let temp ;
// // swap the variables
// temp = num1 ;
// num1 =num2;
// num2=temp;

// console.log(`the value of a after swaping: ${num1}`);
// console.log(`the value of b after swaping: ${num2}`);



// var string =prompt("Enter the string");

// function countVowels(string){
//     var count = 0;

//     for (let letter of string.toLowerCase()){
//         if(vowels.includes(letter))
//         count++;

//     }
//     return count ;
// }
// var result = countVowels(string);
// console.log(result)


// program to count the number of vowels in a string
 

// function countVowels(string){
//     var count = 0;

//     for(let letter of string.toLowerCase()){
//         if(vowels.includes(letter)){
//             count++;
//         }
//     }
//     return count
// }

// const string = prompt("Enter the string");

// const result = countVowels(string);
// console.log(result);






















