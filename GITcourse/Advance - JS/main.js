console.log("Hello Welcome to Debugging");
// console.log(numbers)

// console.error('This is an error');
// console.warn("This is a warning!!!");
console.dir(document);

// console.table([
//     {name: 'Yinka', email: 'testemail', age: 30}
// ])
// console.clear()

// console.group('Grouped Data')
//     console.log('item 1');
//     console.log('item 2');
//     console.log('item 3');
// console.groupEnd('Grouped Data')

// console.time('For Loop');
//     for(let i = 0; i< 2000; i++) {
//         console.log(i)
//     }
// console.timeEnd('For Loop');

// const greaterThan = (number1, number2) => {
//     console.assert( number1 > number2, {"message": "number1 is not greater than number2,", "number1": number1, "number2": number2} )
// }

// greaterThan(4,2)


// localStorage.setItem('age', 10);
// localStorage.setItem('level', 'beginner');
// localStorage.setItem('value', 'This is a test value');

// sessionStorage.setItem('Key', 'Some Value');
// const age = localStorage.getItem('age');

// document.cookie = "username=Lorem Ipsum";

// console.log(age)

// console.dir(document);

// find elements by id, classname, tagname, querySelector css selectors.


//ID
// let headerTitle = document.getElementById('header-title')
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'World';
// headerTitle.innerHTML = '<h4>Good day</h4>';
// headerTitle.style.borderBottom = 'solid 3px red'

//GETELEMENTSBYCLASSNAME
// let items = document.getElementsByClassName("list-group-item")
// console.log(items);

// items[2].textContent = 'Hello World';
// items[1].style.fontWeight = 'bold'
// items[3].style.backgroundColor = "grey"

// for( let i = 0; i< items.length; i++) {
//     items[i].style.backgroundColor = 'blue';
// }



//GETELEMENTBYTAGNAME
// let li = document.getElementsByTagName('li')
// console.log(li);


//QuerySelector
// let header = document.querySelector('#main-header')
// console.log(header);

// header.style.borderBottom = '2px solid blue';

// let input = document.querySelector("input")
// input.value = "Some Item" 

// let submit = document.querySelector('input[type="submit"]')
// submit.value = "Send"

// let item = document.querySelector('.list-group-item')
// item.style.color = 'green'

// let lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color = 'red'

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral'


// let titles = document.querySelectorAll('.title')
// console.log(titles);

// titles[0].textContent = 'Please add Some Item'


let childELement = document.querySelector('.child')

const clickHandler = () => {
    console.log("You have clicked the child element");
    let text = document.createElement('p')
    text.innerText = "You have clicked the child element"
    text.style.color = 'green'
    childELement.append(text)
}

childELement.addEventListener('click', clickHandler )

// MouseOver, MouseEnter, MouseLeave

// const mouseOverHandler = () => {
//     console.log("You're Over the element")
// }

// const mouseEnterHandler = () => {
//     console.log("Your mouse Entered");
//     childELement.style.cursor = 'text'
// }

// const mouseLeaveHandler = () => {
//     console.log("Your mouse left");
//     // childELement.style.cursor = 'text'
// }



// childELement.addEventListener('mouseover', mouseOverHandler )
// childELement.addEventListener('mouseenter', mouseEnterHandler )
// childELement.addEventListener('mouseleave', mouseLeaveHandler )



let itemForm = document.getElementById('itemForm')
console.log(itemForm);

const itemFormHandler = (event) => {
    event.preventDefault()
    const item = document.getElementById('inputItem').value
    itemForm.reset()
    AddItemToGroup(item)
}

const AddItemToGroup = (item) => {
    let listGroup = document.querySelector(".list-group")
    let listElement = document.createElement('li')
    listElement.classList.add('list-group-item')
    listElement.textContent = item
    listGroup.append(listElement)  

}

itemForm.addEventListener('submit', itemFormHandler)

// Keyboard events / Keycode events.