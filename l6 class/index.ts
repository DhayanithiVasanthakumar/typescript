class User{
    public id:number;
    public name:String;
    public domain:String;

    //constructor
    constructor(id:number,name:String,domin:String){
        this.id=id;
        this.name=name;
        this.domain=domin
    }

    public userDetails():void{
        console.log(`id${this.id},name${this.name},domain${this.domain}`);

    }

    public salaryDetails(salary:number){
        return salary*2;
    }

}

//create obj for class

let aswini=new User(1,"dhaya","java");

aswini.userDetails();

console.log(aswini.salaryDetails(4000));