
const naren:{id:number,username:String,isActive:boolean}={
    id:1,
    username:"dhaya",
    isActive:true
}

//mela irukara maari hard code panarathuku bathil ah keela irukara type alias ah use panikalam


type User={id:number,username:String,isActive:boolean};

const dhaya:User={
    id:1,
    username:"dhaya",
    isActive:true
}

const aswini:User={
    id:2,
    username:"aswini",
    isActive:true
}

const userDetails=(user:User):void =>{
    console.log(user);
}

userDetails(dhaya);


/*
union type
*/
//namba define pana yenta datatype kuduthalu yeduthuku

type stringOrNumber=String|Number;

let x:stringOrNumber=10;

console.log(x); 

x="dhaya";
console.log(x);

//eg dark theme light theme
type Theme= "dark"|"light"|"default";

let color:Theme="dark";//inga antha 3 value illama vera kudutha error throw panum
console.log(color);