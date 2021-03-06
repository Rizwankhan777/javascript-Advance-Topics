// 15 JavaScript Advance concepts
 1. JavaScript Prototype

Let me explain the various way of creating objects in JavaScript.
One of the ways to create objects in JavaScript is the constructor function.

function Bike(model,color){
   this.model = model,
   this.color = color,
this.getDetails = function(){
     return this.model+' bike is '+this.color;
   }
}
var bikeObj1 = new Bike('BMW','BLACK');
var bikeObj2 = new Bike('BMW','WHITE');
console.log(bikeObj1.getDetails()); //output: BMW bike is BLACK
console.log(bikeObj2.getDetails()); //output: BMW bike is WHITEConsider the below constructor function:

Instead of using a copy of instances, we are going to use the prototype property of a constructor function.

Prototype
When an object is created in JavaScript, JavaScript engine adds a __proto__ property to the newly created object which is called dunder proto. 
dunder proto or __proto__ points to the prototype object of the constructor function.

function Bike(model,color){
  this.model = model,
  this.color = color
}
Bike.prototype.getDetails = function(){
 return this.model+" bike is "+this.color;
}
var bikeObj1 = new Bike(‘BMW’,’Black’);
console.log(bikeObj1.getDetails());

2.understanding Scope:
Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, 
scope determines the visibility of variables and other resources in areas of your code.

The scope is defined in the main two ways,
Global Scope
Local Scope

3.JavaScript Closures

A closure is the combination of a function and the lexical environment within which that function was declared.

function User(name){
  var displayName = function(greeting){
   console.log(greeting+' '+name);
  }
return displayName;
}
var myFunc = User('RIZWAN');
myFunc('Welcome '); //Output: Welcome RIZWAN
myFunc('Hello '); //output: Hello RIZWAN

//another example of closure
const add = (function () {
  let counter = 0;
  var plus = function () {counter += 1; return counter}
  return plus;
})();

add();
add();
add();


4.Hoisting:

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

var Hoist;
console.log(Hoist);
Hoist = ’The variable Has been hoisted’;

5.Currying:

Currying is a technique of evaluating the function with multiple arguments, into a sequence of function with a single argument.

var add =   function (a){
                 return function(b){
                       return function(c){
                              return a+b+c;
                              }        
                        }
                  }
console.log(add(2)(3)(4)); //output 9
console.log(add(3)(4)(5)); //output 12

Mainly It helps to create a higher-order function. It is extremely helpful in event handling.

6. The apply, call, and bind methods:

var obj={
   num : 2
}
var add = function(num2,num3,num4){
   return this.num + num2 + num3 + num4;
}
var arr=[3,4,5];
//Call method 
console.log(add.call(obj,3,4,5));  //Output : 14
//Apply method
console.log(add.apply(obj,arr));   //Output : 14
//bind Method
var bound = add.bind(obj);
console.log(bound(3,4,5));         //output : 14

7. Asynchronous Js
Asynchronous use in setTimeOut and setInterval methods .

8. Callback Function
A reference to executable code, or a piece of executable code, that is passed as an argument to other code.
callback function extermely use in Asyncronous JS.

9. Promises
A promise represents the result of the asynchronous function. Promises can be used to avoid chaining callbacks. In JavaScript,

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.

var promise1 = new Promise(function(resolve, reject) {
    isDbOperationCompleted = false;
    if (isDbOperationCompleted) {
        resolve('Completed');
    } else {
        reject('Not completed');
    }
});
promise1.then(function(result) {
    console.log(result); //Output : Completed
}).catch(function(error) {
    console.log(error); //if isDbOperationCompleted=FALSE                                                  
    //Output : Not Completed
})

10. Async & Await:
