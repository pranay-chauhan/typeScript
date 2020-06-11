var emp = /** @class */ (function () {
    function emp(name, age, sal) {
        this.name = name;
        this.age = age,
            this.sal = sal;
    }
    emp.prototype.displayDetails = function () {
        console.log("The name of person is " + this.name);
        console.log("The name of age is " + this.age);
        console.log("The name of sal is " + this.sal);
    };
    return emp;
}());
var empDetails = new emp("Mohan", 34, 5000);
empDetails.displayDetails();
