//named function
//1.void
function welcome() : void{
    console.log("Welcome to my website!");
};

welcome();

//2.parameter
function welcome2(name : string) : void{
    console.log("how are you " + name);
}
welcome2("dhaya");

//3.return value
function add(x:number,y:number):string{

    // if(x>y){
    //     return true;
    // }
    // //ending statement
    // return false;
    return `${x+y}`;
};
console.log(add(10,20));

//ARROR FUNCTION
const logger=(logMessage:String):void => {
    console.log(logMessage);
}
logger("Error message");

//ANONMOUS FUNCTION
const multiply=function(a:number,b:number):number{
    return a*b;
}
console.log(multiply(10,20));

//UNION TYPE
function test(input: string | number): void {
    if (typeof input === 'number') {
        console.log(input*3);
    }
    console.log(input);
};
test(10);
test("dhaya");

//FUNCTION LA YEPADI OBJ AH INPUT AH THARATHU
function registerEmployee(
    // step 1 -> object ah input ah tharom
    {userName,
    age,
    }//step 2 -> input ah vangana object ku type sfety panarom
    :{userName:string;
    age:number;
}) 
  //step 4
 : {userName:string;age:number;isValid:boolean} {
    //step 3 -> function yena return pana pogutho athu return panara type ah step 4 la mention pananum
    return {userName,age,isValid:age>18}
};

console.log(registerEmployee({userName:"dhaya",age:20}))