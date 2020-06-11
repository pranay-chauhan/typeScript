class emp{
    name:string;
    age:number;
    sal:number;

    constructor(name:string,age:number,sal:number){
        this.name = name;
        this.age = age,
        this.sal = sal

    }
    displayDetails(){
        console.log(`The name of person is ${this.name}`);
        console.log(`The name of age is ${this.age}`);
        console.log(`The name of sal is ${this.sal}`)
    }
}
var empDetails = new emp("Mohan",34,5000);
empDetails.displayDetails();