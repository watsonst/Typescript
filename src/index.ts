// var newVariable: string = "Hello";
// let AnotherVariable: number = 5;
// const ValueThatConnotChangeAfterBeingSet: Number = 3000;

interface Person{
    firstName: String;
    lastName: String;
    age: Number;
    pets: String[]
}

const person ={
    firstName: "Stephanie",
    lastName: "Watson",
    age: 30,
    pets: ["dog", "alligator"]
};


class IAmHuman implements Person{
    firstName: String;
    lastName: String;
    age: Number;
    pets: String[]

    constructor(){
        this.firstName = "";
        this.lastName = "";
        this.age = 0;
        this.pets = [];
    }

}

const human = new IAmHuman();

function greeting(person: Person): String {
    const result = `${person.firstName} ${person.lastName}`;
    console.log(person.pets);
    return result;
}

// function greeting(person: Person): String {
//     const result = `${person.firstName} ${person.lastName}`;
//     console.log(person.pets);
//     return result;
// }

const mystring = greeting(human);

console.log("Welcome")
console.log(mystring)


//const first = person.firstName.toLocaleUpperCase();

// function greeting(person: any): String {
//     const result = `${person.firstName} ${person.lastName}`;
//     return result;
// }

// const mystring = greeting(person);

// console.log("Welcome")
// console.log(mystring)


//function greeting(person: any) {
 //   console.log(`Hello ${person.firstName} ${person.lastName}`);
//}

//greeting(person);





//let propertyOne = "this is a new test";
//propertyOne = 8;

//console.log(propertyOne);