// DOM selectors

// getElementbyId()
 const title = document.getElementById('my-title');
 console.log(title)

// getElementByClassName()
const heading = document.getElementsByClassName('heading');
console.log(heading)

const listItems = document.getElementsByClassName('list-item');
console.log(listItems)

// getElementByTagName()
let myTag = document.getElementsByTagName('li');
console.log(myTag)

// querySelector()

let myFirstDiv = document.querySelector('div')
console.log(myFirstDiv)

// querySelectorAll()
let allMyDiv = document.querySelectorAll('div')
console.log(allMyDiv)
