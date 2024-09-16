console.log(document)
console.log(document.body)


// document.getElementById() returns single element
// document.getElementsBy... returns array
// document.createElement() creates a new DOM element for us to work with / configure
// document.appendChild() adds newly created element to DOM


// First we create a new <p> with the DOM
const newPTag = document.createElement("p")
// console.log(newPTag)

// Now we configure the new element
newPTag.innerText = "This is a new element."
newPTag.style.color = "blue"
newPTag.style.fontSize = "48px"
newPTag.classList = "paragraph-1"
newPTag.id = "new-paragraph"
newPTag.title = "This is some popover text."
console.log(newPTag)

// Lastly, we'll attach it to the DOM so it renders

// document.appendChild(newPTag) // This throws a hierarchy error
document.body.appendChild(newPTag)


function addSingleListElementToDOM() {
    const divElement = document.getElementById("container") // get the div
    
    // Step 1: Create new DOM elements
    const newUlEl = document.createElement("ul")
    const newLiEl = document.createElement("li")
    
    // Step 2: Configure them
    newLiEl.innerText = "This is an item in the list."
    // newUlEl.innerHTML = "<li>a new element, but text</li>"
    newUlEl.appendChild(newLiEl)
    
    // Step 3: Append them so they render
    
    console.log(newLiEl)
    console.log(newUlEl)
    
    divElement.appendChild(newUlEl)
}


function addBigListToDOM() {
    // Run a loop
    // Create new child
    // Configure new child
    // Append new child to the parent div
    // Exit Loop
    // Finish
    
    // Get the div that we want to give new children
    const divContainerEl = document.getElementById("container")
    const count = 20
    
    const newUlEl = document.createElement("ul")
    
    for (let i = 0; i < count; i++) {
        const newLiElement = document.createElement("li")
        newLiElement.innerText = "Item " + i
        newLiElement.id = "li-" + i
    
        newUlEl.appendChild(newLiElement)
    }
    
    divContainerEl.appendChild(newUlEl)
    
    // Remove a random element from the DOM
    const selectedLi = document.getElementById("li-5")
    selectedLi.remove()
}
