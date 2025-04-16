//class
// class className{
//     constructor(prop1,prop2){
//         this.prop1 = prop1;  //this is used for the class varibale
//         this.prop2=prop2;
//     }
// }
// let obj = new className ("arg1","arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);

//thsi keyword refers to the object its belongs to, so it is the first property of the instance of className.

// class Dog{
//     constructor(dogName,weight,color,breed){
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }
// let dog= new Dog("javaScript",2.4,"brown","chihuahua");
// console.log(dog.dogName,"is a",dog.breed,"and weight",dog.weight,"kg");

//classes

//it is convention to start class name with the capital letter

// class Person{
//     constructor(firstName,lastName){

//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// let p = new Person("Priyanshi","saini");
// console.log(p.firstName,p.lastName);

// class Person{
//     constructor(firstName,lastName = "sharma"){

//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
// let p = new Person("Priyanshi");
// console.log(p.firstName,p.lastName);

//method
//function on a class are called methods.when defining these methods we dont use the function keyword we can start directly with the name
 
// class Person{
//     constructor(firstName,lastName = "sharma"){

//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

// greed(){
//     console.log("hi there! i am",this.firstName);
// }
// }
// let p = new Person("priyanshi","saini");
// p.greed();