let colors :string []=["red","green","blue"];
console.log(colors);

let data :any[]=[10,"dhaya",true];
data[0]="hari";
console.log(data);

//tuple -> mela data obj la 1st index yepavum number tha irukanu  nu nanaikare ,aana "any" kuduthathu naala array la change aaguthu ,
            //so itha avoid pana tha "tuple" ku porom ,athula datatype order ah set panikanum.
let dataOne:[number,string,boolean]=[10,"dhaya",true];
//ipa inga 0th index ah number nu set panathu naala atha veradatatype ku change pana mudiyathu
//dataOne[0]="hari";
console.log(dataOne);

//oru string array va yepadi loop pani paakarathu(like for each in java)
let carBrand:string[]=["audi","bmw","honda"];

carBrand.map((car : string)=>{
    console.log(car);
});


//object ah array va vachi yeppadi loop panarathu
const pepsi={
    color:"red",
    sugar:40,
}
const coke={
    color:"black",
    sugar:50,
}
const sprite={
    color:"white",
}

//object la ulla nullable ah ipaditha("?")  tha handle pananum
//"?"->nullable ,example sugar -> irukalam ilaamalum pogalam ,iruntha print panum ilana leave panidum
let drinks:{color:string;sugar?:number}[]=[pepsi,coke,sprite];
//array of objects
console.log(drinks);

//map
drinks.map((coolDrinks :{color:string;sugar?:number})=>{
    //array va illama oru oru object ah print aagi iruku
    console.log(coolDrinks);
})

