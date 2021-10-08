var btns = document.getElementById("btn")
var btnOne = document.getElementById("one")
var btnTwo = document.getElementById("two")
var btnThree = document.getElementById("three")
var btnFour = document.getElementById("four")
var btnFive = document.getElementById("five")
var btnSix = document.getElementById("six")
var btnSeven = document.getElementById("seven")
var btnEight = document.getElementById("eight")
var btnNine = document.getElementById("nine")
var col1 = document.getElementById("col1")
var col2 = document.getElementById("col2")
var col3 = document.getElementById("col3")
var col4 = document.getElementById("col4")
var col5 = document.getElementById("col5")
var col6 = document.getElementById("col6")
var col7 = document.getElementById("col7")
var col8 = document.getElementById("col8")
var col9 = document.getElementById("col9")
var columns = document.getElementById("columns")



var listOfColumns = [col1, col2, col3, col4, col5, col6, col7, col8, col9]

function random_bg_color(listOfColumns) {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    listOfColumns.style.backgroundColor = bgColor  
//  console.log(bgColor);
}


btnOne.addEventListener("click", function()  {
    random_bg_color(listOfColumns[0])
})
btnTwo.addEventListener("click", function()  {
    random_bg_color(listOfColumns[1])
})
btnThree.addEventListener("click", function()  {
    random_bg_color(listOfColumns[2])
})
btnFour.addEventListener("click", function()  {
    random_bg_color(listOfColumns[3])
})
btnFive.addEventListener("click", function()  {
    random_bg_color(listOfColumns[4])
})
btnSix.addEventListener("click", function()  {
    random_bg_color(listOfColumns[5])
})
btnSeven.addEventListener("click", function()  {
    random_bg_color(listOfColumns[6])
})
btnEight.addEventListener("click", function()  {
    random_bg_color(listOfColumns[7])
})
btnNine.addEventListener("click", function()  {
    random_bg_color(listOfColumns[8])
})