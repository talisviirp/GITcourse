class Rectangle {
    constructor(lenght, breadth) {
    this.lenght = lenght;
    this.breadth = breadth;
    }
    getArea() {
        return this.lenght * this.breadth + "m3"
    };
    getPerimeters() {
        return 2*(this.lenght + this.breadth) + "m"
    }

}

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

let form = document.getElementById("formOne");
let formTwo = document.getElementById("formTwo");

let submitRectangle = (event) => {
    event.preventDefault()
    const lenghtElement = form.elements["lenghtElement"]
    const breadthElement = form.elements["breadthElement"]
   
    const lenghtValue = parseInt(lenghtElement.value)
    const breadthValue = parseInt(breadthElement.value)

    let rectangle = new Rectangle(lenghtValue, breadthValue)
    document.getElementById("answerOne").innerHTML = `the area is ${rectangle.getArea()} and the perimeter is ${rectangle.getPerimeters()}`
    // form.reset()



    
}
let submitCirle = (event) => {
    event.preventDefault()
    const radiusElement = formTwo.elements["radiusElement"]

    const radiusValue = parseInt(radiusElement.value)
    let circle = new Circle(radiusValue)

    document.getElementById("answerTwo").innerHTML = `The area is ${circle.getArea()} and circumference is ${circle.getCircumference()}`
}


form.addEventListener("submit", submitRectangle)

formTwo.addEventListener("submit", submitCirle)