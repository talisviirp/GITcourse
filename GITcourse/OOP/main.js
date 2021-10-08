// function Rectangle (a, b) {
//     this.a = a;
//     this.b = b;
//     this.getArea = function () {
//         return this.a * this.b + "m3"
//     };
//     this.getParameters = function () {
//         return 2*(this.a + this.b) + "m"
//     }

// }

// let rec1 = new Rectangle(5, 6)
// console.log(rec1.getArea(), rec1.getParameters());






class Circle {
    constructor(radius) {
    this.radius = radius
    this.diameter = radius * 2
    }
    getCircumference() {
        return Math.PI * this.diameter
    }
    getArea() {
        return Math.PI * (this.radius**2)
    }
    
}


let circle1 = new Circle(10)
console.log(circle1.getCircumference(), circle1.getArea());

let circle2 = new Circle(12)
console.log(circle2.getCircumference(), circle2.getArea());

let circle3 = new Circle(15)
console.log(circle3.getCircumference(), circle3.getArea());




// class Student {
//     constructor(studentName, studentAge) {
//         this.studentName = studentName;
//         this.studentAge = studentAge
//     }

//     setScores(...scores) {
//         this.scores = scores
//     }
//     getAverageScores() {
//         let total = 0;
//         for(let i = 0; i < this.scores.length; i++) {
//             total += this.scores[i] // Total = Total + i
//         }
//         this.avgScore = total / this.scores.length;
//         return this.avgScore
//     }
//     getDetails() {
//         return `${this.studentName} who is ${this.studentAge} years old has an average score of ${this.avgScore}`
//     }
// }
    


// let student1 = new Student("Talis", 26)

// student1.setScores(1,2,3,4,5)
// student1.getAverageScores()
// console.log(student1.getDetails())    

// // class 
// class Triangle {
//     constructor(a, b, c) {
//         this.breadth = a
//         this.height = b
//         this.hypotenus = c
// }
// // area of triangle
//     getArea() {
//         return 0.5 * this.breadth * this.height
//     }
        
// // method getPerimeter
//     getPerimeter() {
//         return this.breadth + this.height + this.hypotenus
// }
// // method getDetails
//     getDetails() {
//         return `Area of the triangle is ${this.getArea()} and perimeter is ${this.getPerimeter()}`
//     }
// }
// let triangle1 = new Triangle (5, 5, 5)

// console.log(triangle1.getDetails());