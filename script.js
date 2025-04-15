// function sayHello(){
//     let you = prompt("What is your name");
//     console.log("Hello"+you+ "!");
//     }
// sayHello();

// let varContainingFunction = function(){
//     let varInFunction="I'm in a function";
//     console.log("hi there!",varInFunction);
// };
// varContainingFunction();
// function tester(para1,para2){
//     return para1+""+para2;

// }
// const agr1 = "argument 1";
// const agr2 = "argument 2";
//  console.log (tester(agr1,agr2));

// let x1=parseInt(prompt("enter the first number"));
// let x2 = parseInt(prompt("enter the ssecond number"));
// addTwoNumbers(x1,x2);
// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// function addTwoNumbers(x=2,y=3){
//     console.log(x+y);
// }
// addTwoNumbers(4,5);//arrow function are great for sending function around parameters using shorter notation

// represented by =>
// let doingArrowStuff=  x => console.log(x);
// doingArrowStuff("great!");

// let addTwoNumbers = (x,y)=> console.log(x+y);
// addTwoNumbers(2,4);

// const arr=["squirrel","alpac","buddy"];
// arr.forEach(e => console.log(e));

// let spread = ["so","much","fun"];
// let message =["javascript","is",...spread,"and","very","powerful"
// ];
// console.log(message);

// function addTwoNumbers(x,y){
//        console.log(x+y);

// }
// let arr =[5,9];
// addTwoNumbers(...arr);
// function addTwoNumbers(x,y,z,a){
//     console.log(x+y+z+a);

// }
// let arr =[5,9];
// let arr2 = [6,7];
// addTwoNumbers(...arr ,...arr2);

// function someFunction(p1,p2,p3){
//     console.log(p1,p2,p3);
// }
// someFunction("hi","there!","how are you");
// arrow function (p1,p2)=> body of the function;
 
// let spread =["so","much","fun"];
// let message =["javascript","is ",...spread ,"and","very","powerfull"];
// function addTwoNumbers(x,y){
//            console.log(x+y);
    
//     }
//     let arr =[5,9];
//     addTwoNumbers(...arr);
//     function addTwoNumbers(x,y,z,a){
//         console.log(x+y+z+a);
//     }
// function someFunction(p1,...p2){
//     console.log(p1,p2);
// }
// someFunction("hi","there!","how are you");

//returning function values
//  let favoriteSubj = prompt("what is your fav subject:");

// let addTwoNumbers = (x,y)=> console.log(x+y);
// addTwoNumbers(2,4);
// function addTwoNumber(){
// let resultArr =[];

// for(let i=0;i<10;i++){
//     let result = addTwoNumber(i,2*i);
//     resultArr.push(result);
// }
// console.log(resultArr);
// }

// function addTwoNumber(x,y){
//     return x+y;
// }

//variables scope in functions
// function testAvailablity(x){
//     console.log("available here:",x)}
//  testAvailablity("hi!");
//  console.log(" Not availabe here:",x);


//  function testAvailablity(){
//     let y ="local avavilable";
//     console.log("available here:",y)}
//  testAvailablity();
//  console.log(" Not availabe here:",y);

// function testAvailable(){
//     let y ="I will return";
//     console.log("available here ",y);
//     return y;

// }
// let z = testAvailable();
// console.log("outside the function:",z);
// console.log("not available here:", y);

// let verses var variable
//  function doingStuff(){
//     if(true){
//         var x ="local";

//     }
//     console.log(x);
//  }
//  doingStuff();

//let verses var variable
//  function doingStuff(){
//     if(true){
//         let x ="local";

//     }
//     console.log(x);
//  }
//  doingStuff();

//constant scope
//  function doingStuff(){
//     if(true){
//         const x ="local";

//     }
//     console.log(x);
//  }
//  doingStuff();

//global varibale
// let globalVar = "accessible every  where";
// console.log("outside the function", globalVar);

// function creatingNewScope(x){
//     console.log("access the global variable inside the function",globalVar);

// }

// let x = "global";
// function doingStuff(){
//     let x ="local";
//     console.log(x);
// }
// doingStuff();
// console.log(x);

// let x = "global";
// function doingStuff(){
//      x ="local";
//     console.log(x);
// }
// doingStuff();
// console.log(x);

// let x = "global";
// function doingStuff(x){
//     console.log(x);

// }
// doingStuff("param");
 
//confuse
// function confuseReader(){
//     x = "guess my scope...";
//     console.log("inside the function",x);

// }
// confuseReader();
// console.log("outside the function",x);

//IIFE function

// (function (){
//     console.log("IIFE");

// })();
  

// (()=>{
//     console.log("run right away");
// })();

//recursive function
// function getRecurcive(nr){
//     console.log(nr);
//     getRecurcive(--nr);

// }
// getRecurcive(3);

// function getRecurcive(nr){
//     console.log(nr);
//     if(nr>0){
//     getRecurcive(--nr);
//     }
// }
// getRecurcive(3);

// function longRecursive(nr){
//     console.log("starter function",nr);
//     if(nr>0){
//         longRecursive(nr-1);
//     }else{
//         console.log("done with recursive");
//     }
//     console.log("ended function ",nr);
// }
// longRecursive(3);

// function getRecurisve(nr){
//     console.log(nr);
//     if(nr>0){
//         console.log(nr);
//      getRecurisve(--nr);

// }
// }
// getRecurisve(3);

//the performace of the recurion is slightly worse then theperformace of regular iteration using a loop.

//nested functions

// function doOuterFunction(nr){
//     console.log("outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//         console.log(x + 7);
//         console.log("I Can Acccess Outer Variable:",nr);

//     }
// }
//  doOuterFunction(2);


//Anonymous function
//like passing in a function as a parameter this concept add another abstract layer to coding this concept is call callback.

//function callback
// let functionVaribale = function(){
//     console.log("Not so secret though.")
// }

// function doFlexibleStuff(executeStuff){
//     executeStuff();
//     console.log("Inside doFlexibleStuff .");
// }
// doFlexibleStuff(functionVaribale);

// let youGotThis = function(){
//     console.log("You are doing really well,keep coding");

// };
// setTimeout(youGotThis,1000);

// let youGotThis = function(){
//     console.log("You are doing really well,keep coding");

// };
// setInterval(youGotThis,1000);

// let testFunction = function(){
//     console.log("hello")
// }();

// (function(){
//     console.log("welcome");
// })();
// (function(){
//     let firstName ="Laurence";
// })();
// let result = (function(){
//     let firstName = "Laurence";
//     return firstName;

// })();