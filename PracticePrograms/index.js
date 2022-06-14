<script>


//-1 convert kilometer into miles 

// const kiloMeter = prompt("Enter value in kilometers");

// var factor = 0.621371;

// var miles = factor * kiloMeter;
// console.log(`${kiloMeter} kilometers is equal to ${miles} miles`);



//-2 Quadratic Formula solution

// const a = prompt("Enter the first number");
// const b = prompt("Enter the second number");
// const c = prompt("Enter the third number");

// let root1,root2;

// let discriminent = b * b - 4 * a *c;

// if(discriminent > 0){
//   root1 = (-b+ Math.sqrt(discriminent)) / (2 * a) ;
//   root2 = (-b - Math.sqrt(discriminent)) / (2 * a);
//   console.log(`The roots of quadratic equations are ${root1} & ${root2}`)
// }
// if (discriminent == 0){
//   root1 = root2 = -b / (2 * a);

//   console.log(`The roots of quadratic equations are ${root1} & ${root2}`)
// }

//-3 Area of Triangle

// const base = prompt("Enter the base of triangle")
// const height = prompt("enter tha heigt of triangle")

// let Area = base * height / 2;

// console.log(`The Area of triangle is ${Area}`);

//-4 Generate a Random Number

// let number = [0,1,2,3,4,5,6,7,8,9];

// let result =  Math.floor((Math.random(number) * 10));
// console.log(result);

//-5 Check if the number is positive negative or zero

// const number = prompt("Enter the number");

// if(number > 0){
//   alert(`The Number is Positive ${number}`)
// }else  if(number < 0){
//   alert(`The number is ${number}`)  
// }else{
//   alert(`The number is zero`);
// }
// console.log("Happy hacking")



//-6 check if a number is even or odd

// for testing modulus operator
// let value = 6;

// let result = value % 2 
// console.log(result)


// const number =prompt("Enter Number");
// if(number % 2 == 0){
//   console.log("Number is even");
// }else{
//   console.log("Number is odd")
// }


//-7 JavaScript Program to Find the Largest Among Three Numbers

// const num1 = prompt("Enter the first number");
// const num2 = prompt("Enter the first number");
// const num3 = prompt("Enter the first number");


// if(num1 >= num2 && num1 >= num3){
//   console.log(`The largest number is  ${num1}`)
// }else if(num2 >= num1 && num2 >= num3){
//   console.log(`The largest number is ${num2}`)
// }else{
//   console.log(`The largest number is ${num3}` )
// }


//-8 JavaScript Program to Check Prime 

// const number = prompt("Enter the number");

// let isPrime = true;

// if(number == 1){
//   console.log("1 is not a prime or composite number")
// }else if(number > 1){
//   for(let i=2 ; i<number;i++){
//     if(number % i == 0){
//       isPrime = false;
//       break;
//     }
//   }
//   if(isPrime){
//     console.log(`${number} is prime number`)
//   }else{
//     console.log(`${number} is not a prime number`)
//   }
// }


//-9 JavaScript Program to Print All Prime Numbers in an Interval

// const lowerNumber = prompt("Enter the first number");
// const higherNumber = prompt("Enter the Second Number");

// console.log(`The list of ${lowerNumber} and ${higherNumber} is `)

// for(let i=lowerNumber; i<=higherNumber; i++){
//   let  flag = 0;

//   for(let j=2; j<i; j++){
//     if(i % j === 0){
//       flag =1;
//       break;
//     }
//   }
//   if(i>1 && flag == 0){
//     console.log(i)
//   }
// }


//-10 JavaScript Programs to Find the Factorial of a Number

// const number = prompt("Enter the number");


//  if(number > 1){
//   let fact = 1;
//   for(i = 1; i<=number ; i++){
    
//     fact *= i;
//   }
//   console.log(`The factorilal of ${number} is ${fact}`);

// }

</script>
