interface Vehicle{
    modelName:String,
    modelYear: Number,
    broken:boolean,
    details():String
}


const honda :Vehicle={
    modelName: "Honda",
    modelYear: 2020,
    broken: false,
    details():String{
        return `name:${this.modelName},model${this.modelYear}`;
    }
};
console.log(honda.details);


//extends
interface IdModel{
    id:number;
}

interface IdBaseModel{
    name:String;
    age:number
}

interface IUser extends IdModel,IdBaseModel{
    userDetails(): void;
}

const dhaya : IUser={
    id:8,
    name:"dhaya",
    age:21,
    userDetails():void {
        console.log(this.name);
    },
}

dhaya.userDetails();