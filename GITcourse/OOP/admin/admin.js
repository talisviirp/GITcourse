class Employee {
    constructor(employeeId, name, salary, position, age) {
        this.employeeId = employeeId
        this.name = name
        this.salary = salary
        this.position = position
        this.age = age
    }

    getEmployeeDetails() {
        return `${this.employeeId} -- ${this.name} -- ${this.salary} -- ${this.position} -- ${this.age}`
        }
}

class Company {
    constructor(name, address) {
        this.name = name
        this.address = address
        this.employees = []
    }

    addEmployees(employee) {
        this.employees.push(employee)
    }

    getTotalSalarys() {
        let total = 0
        for(let i = 0; i < this.employees.length; i++) {
            total += this.employees[i].salary
        }
        return total
    }

    // getAllEmployees() {
    //     return this.employees
    // }
}

let company = new Company("Global World Plc", "America 7, California")

document.getElementById("welcome").innerHTML = `Welcome to ${company.name} Admin`
document.getElementById("address").innerHTML = `Address - ${company.address}`;

console.log(company.employees);

let form = document.getElementById("employeeForm");

let employeeId = 0


let addEmployee = (event) => {
    console.log("you clicked the Sumbit button", event)
    event.preventDefault()
    employeeId++
    
    // Take the values from the inputs
    const fullName = form.elements["fullNameElement"]
    const salary = form.elements["salaryElement"]
    const position = form.elements["positionElement"]
    const age = form.elements["ageElement"]

    // Get element's value
    const fullNameValue = fullName.value
    const salaryValue = parseInt(salary.value)
    const positionValue = position.value
    const ageValue = parseInt(age.value)

    // Add the employee details to the company


console.log(fullNameValue, salaryValue, positionValue, ageValue);
let employee = new Employee (
    employeeId,
    fullNameValue, 
    salaryValue, 
    positionValue, 
    ageValue);
console.log(employee);

company.addEmployees(employee)

console.log(company);

let detailText = "";
for (let i = 0; i < company.employees.length; i++) {
    console.log(company.employees);
    detailText += company.employees[i].getEmployeeDetails() + "<br>";
}
     
document.getElementById("employeeDetails").innerHTML = detailText;
document.getElementById("totalSalary").innerHTML = `The total salary for all employees is ${company.getTotalSalarys()}`
form.reset()
}
form.addEventListener("submit", addEmployee)
