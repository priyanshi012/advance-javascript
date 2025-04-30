//ascyncronous code and some options for multitasking with code.
//callbacks
//it is just a function that takes the another function as an argumnet
// function doSomething(callback){
//     callback;
// }
// function sayHi(){
//     console.log("Hi");
// }
// console.log(doSomething(sayHi));

// function judge(grade){
//     switch (true){
//         case grade =="A":
//           console.log("you got an ",grade,":amazing");
//           break;
//         case grade =="B":
//           console.log("you got an ",grade,":welldone");
//           break;
//         case grade =="C":
//           console.log("you got an ",grade,":alright");
//           break;
//         case grade =="D":
//           console.log("you got an ",grade,":Hmmmm..");
//           break;
//           deafult:
//           console.log("an", grade,"what!");

       
//     }
// }
// function getGrade(score,callback){
//     let grade;
//     switch(true){
//         case score>=90:
//             grade ="A";
//             break;
//         case score>=80:
//             grade ="B";
//             break;
//         case score>=70:
//             grade ="C";
//             break; 
//         case score>=60:
//             grade ="D";
//             break; 
//         deafult:
//         grade ="F";     
//     }  
//     callback(grade);      
// }
// getGrade(85,judge);

// //the callback become really valuable in an asynchromous context,

// //promises
// //we can organize the sequence of the code
// // there are two cases one is resolve and another one is reject

// let promise = new Promise(function (resolve,reject){
//     let x = 20;
//     if(x>10){
//         resolve(x);
//     }else{
//         reject("TOO low");
//     }

// });
// promise.then(
//     function(value){
//         console.log("suncess:",value);
//     },
//     function(error){
//         console.log("error:",error);
//     }
// );

// const promise = new Promise((resolve,reject)=>{
//     resolve("success!");
// })
// .then(value =>{
//     console.log(value);
//     return "we";
// })
// .then(value =>{
//     console.log(value);
//     return "can";
// })
// .then(value =>{
//     console.log(value);
//     return "chain";
// })
// .then(value =>{
//     console.log(value);
//     return "promises";
// })
// .then(value =>{
//     console.log(value);
    
// })
// .catch(value =>{
//     console.log(value);
// })

//async and await
// function saySomething(x){
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             resolve("something" + x);
//         },1000);
//     });
// }
// async function talk(x){
//     const words = await saySomething(x);
//     console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);

//eventloop
//javaScript is a single threaded languange
//call stack and call back queue

// console.log("hi there!!");
// add(4,5);
// function add (x,y){
//     return x+y;
// }

// console.log("hi there ");
// setTimeout(()=>
//     console.log("sorry i am late"),1000);
// console.log(add(4,5));
// function add (x,y){
//         return x+y;
//     }
// console.log("hi there ");
// setTimeout(()=>
//     console.log("sorry i am late"),0);
// console.log(add(4,5));

