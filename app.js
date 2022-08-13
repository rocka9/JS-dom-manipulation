// Styling elements

// querySelector()

let myFirstDiv = document.querySelector('#my-title')
myFirstDiv.style.color = 'blue'

// querySelectorAll()
let allMyDiv = document.querySelectorAll('.list-item')


for(i = 0; i<allMyDiv.length; i++) {
    allMyDiv[i].style.backgroundColor = 'yellow'
}

// setAttribute
