console.log("Welcome to data structure!!");

let letters = [] // this is our stack

// palindrome
let word = "computer"

let reversedWord = ""

// for(let i = 0; i < word.length; i++) {
//     letters.push(word[i])
// }

// for(let i = 0; i < word.length; i++) {
//     reversedWord += letters.pop() //reversedWord = reversedWord + letter.pop()
// }
// // Checking the conditions
// if (reversedWord === word) {
//     console.log(word + " is a palindrome");
// } else {
//     console.log(word + " is not a palindrome");
// }

class Stack {
    constructor() {
        this.storage = {}
        this.count = 0
    }
    // Adding a value to the end of the stack
    push(value) {
        this.storage[this.count] = value // { count: value }
        this.count++; // this.count = this.count + 1
    }

    // Remove and return the value at the end of the stack
    pop() {
        if (this.count === 0) {
            return undefined
        }
        this.count--; //this.count = this.count - 1;
        let result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }
    // Returns the number of element we have in the stack.
    size() {
        return this.count;
    }
    // Returns the value at the end of the stack.
    peek() {
        return this.storage[this.count-1] 
    }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log("First peek",myStack.peek());
console.log("First pop",myStack.pop());
console.log("Second peek",myStack.peek());
myStack.push(4);
console.log("Size",myStack.size());

let newStack = new Stack();

const palindromeChecker = (word) => {
    let wordStack = new Stack();
    let reversedWord = "";
    for(let i = 0; i < word.length; i++) {
        wordStack.push(word[i])
    }
    for (let i = 0; i < word.length; i++) {
        reversedWord += wordStack.pop()
    }
    if (reversedWord === word) {
        return `${word} is a palindrome`
    } else {
        return `${word} is not a palindrome`
    }
}

console.log(palindromeChecker("racecar"));

// Queue FIFO - First In First Out

class Queue {
    constructor() {
        this.collection = []
    }
    // Adds element to the storage
    enqueue(value) {
        this.collection.push(value)
    }
    // Remove the first element at the bottom
    dequeue() {
        return this.collection.shift();
    }
    isEmpty() {
        return (this.collection.length === 0)
    }
    front() {
        return this.collection[0];
    }
    size() {
        return this.collection.length;
    }
    print() {
        console.log(this.collection);
    }
}


let myQueue = new Queue();
myQueue.enqueue("a")
myQueue.enqueue("b")
myQueue.enqueue("c")
myQueue.print()
myQueue.dequeue()
console.log(myQueue.size())
myQueue.print()

class PriorityQueue extends Queue {
    constructor() {
        super()
        this.collection =[] // [ ["A", 1], ["B", 3], ["C", 5] ]
    }
    enqueue(value) {
        // value = ["A", 1]
        // check if collection is empty?
        if (this.isEmpty()) {
            this.collection.push(value)
        } else {
            // Loop through the existing values
            let added = false;
            for (let i = 0; i < this.collection.length; i++) {
                // check for prioritis that are higher 
                if (value[1] < this.collection[i][1]) {
                    this.collection.splice(i, 0, value)
                    added = true
                    break;

                }
            }
            // check if no prority is higher
            if (!added) {
                this.collection.push(value)
            }
        }
        console.log("Im in the enqueue")
    }
}


let myPQueue = new PriorityQueue()
myPQueue.enqueue(["A", 5])
myPQueue.enqueue(["B", 3])
myPQueue.enqueue(["C", 2])
myPQueue.enqueue(["D", 3])
myPQueue.print()
