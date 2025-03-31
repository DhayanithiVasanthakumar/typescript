//topic 1:
//type Annotations -> used for datatype safety

//string
let userName : String="dhaya";
console.log(userName);

//number
let age : number=21;
console.log(age);

//boolean
//normal
//let isAdult : boolean=true;

//to check conditionly
let isAdult : boolean=age>28;
console.log(isAdult);

//any
let unknown:any=10;

unknown="dhaya";

unknown=true;
console.log(unknown);

//null
let nothing : null=null;
console.log(nothing);

//undefined
let nothing2 : undefined=undefined;
console.log(nothing2);

//topic 2:
//TYPE INFRENCE -> right side la namba kudukara input ah vachi athuve data type ah asign panikum
let collegeName="ksr";

let bankBalance=1000000;


//topic 3:
//union type->multiple data type ah accept panum
let billAmount : number | string=100;
console.log(billAmount);

//topic 4:
//literal value type -> custom aana type ah create pani atha mattum use panikalam
let color : "red" | "green" | "blue";
color='blue'
console.log(color);

let rollDice:1|2|3|4|5|6;
rollDice=5;
console.log(rollDice);

//topic 5:
//object
let person :{name:string;age:number;isEmployed:boolean} = {
    name: "dhaya",
    age: 28,
    isEmployed: true,
};
console.log(person);

//topic 6:
//destructuring the object
//this is correct example ,but it shows error ,so i comment this topic.
//const { name , age } : {name:string;age:number}=person;
//console.log(name,age);