function oddnumber(number){

    if (number % 2 === 1) {
        console.log("The number is odd");
    } else{
        console.log("The number is even");
    }
}

oddnumber(16)
oddnumber(17)

// number % 5 === 0
// function division(number){
//     for (let i = 0; i < 100; i++{
//     }
// }

// const printDivisiblity = () => {
//     for (let i = 0; i < 100; i++) {
//         if (i % 5 === 0) {
//             console.log(i);
//         }
        
//     }
// }
// printDivisiblity() 

// const convert = (hour) => {
//     var hour = hour * 3600
//     console.log(hour + " " + "Seconds");
// }
// convert(2)

const thisString = (string) => {
    str = "Teretere"
    if (string.length >= 5) {
        return string.slice(-4)
    } else {
        return "Input string greater then 5 charatcers"
    }
}
console.log(thisString("Tereterevanakere"));
