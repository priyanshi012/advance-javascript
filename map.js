//  //create a map
//  const fruits = new Map([
//     ["apple",500],
//     ["bananana",300],
//     ["orange",200]
// ]);
// console.log(fruits);

//create a map
// const fruits = new Map();
// fruits.set("apple",500),
// fruits.set  ("bananana",300),
// fruits.set ("orange",200)

// console.log(fruits)
// console.log(fruits.size)

// let text ="";
// fruits.forEach(function(value,key){
//     text += key+'='+value;
// })
// console.log(text);

//map.entity
// let text ="";
// for(const x of fruits.entries()){
//     text += x;
// }
// console.log(text);
// let text =" ";
// for(const x of fruits.keys()){
//     text += x;
// }
// console.log(text);

// let total =0;
// for(const x of fruits.values()){
//     total += x;
// }
// console.log(total);

//objects
// const apples ={name:'Apple'};
// const banana ={name:'Banana'};
// const orange ={name:'Orange'};
// const fruits =new Map();

// fruits.set(apples,500);
// fruits.set(banana,300);
// fruits.set(orange,200);

// console.log(fruits.get("apple")); //undefined

//destructuring //no change in object
// const person={
//     firstName :"john",
//     lastName :"doe",
//     age : 50
// };
// let{firstName,lastName}=person;

// console.log(firstName);
// console.log(lastName); //order of the property does not matters
 
//alias creation to chnage the name of key values
// let name ="GurukulTHeSchool"
// let[a1,a2,a3,a4,a5] = name;
// console.log(name)

// const fruits =["Banana","orange","apple","mango"];
// let[fruits1,fruits2]=fruits;
// console.log(fruits1);
// console.log(fruits2);

// const fruits =["Banana","orange","apple","mango"];
// let[fruits1,,,fruits2]=fruits;
// console.log(fruits1);
// console.log(fruits2);
// const fruits =["Banana","orange","apple","mango"];
// let{[0]:fruits1,[1]:fruits2}=fruits;
// console.log(fruits1)

//rest property
// const numbers =[10,20,30,40,50,60]
// const[a,b,...rest]=numbers;
// console.log(a)
// console.log(b);
// console.log(...rest)

// let firstName = "priyanshi";
// let lastName = "saini";

// [firstName,lastName]=[lastName ,firstName];
// console.log(firstName);
// console.log(lastName)

//exponentiation
// let x =5;
// let z = x**2;
// console.log(z);
// let x =5;
// let z = Math.pow(x,2);
// console.log(z)

// let x = 5;
// x **= 2;
// console.log(x);

//array includes()
//  const fruits =["Banana","orange","apple","mango"];
//  console.log(fruits.includes("mango"));

// const fruits =["Banana","orange","apple","mango"];
// console.log(fruits.includes("banana",3));

//tralling commas in array
// const arr=[
//     "one",
//     "two",
//     "three",,
// ];
// const arr=[,];

// const person ={
//     firstName :"john",
//     lastName:"dewis",,
    
//     age :30,
// }
// console.log(person)

