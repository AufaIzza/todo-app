// selects the main container
const mainContainer = document.getElementById("main-container")

// selects the input 
const todoButton = document.getElementById("todo-button")
const todoInput = document.getElementById("todo-input")

// tailwind class styling
const itemContainerClass = "flex gap-4 items-center item-container"
const itemRemoveButtonClass = "mt-4 bg-red-400 size-10 item-remove shadow shadow-black px-2 rounded-lg hover:bg-red-200"
const itemCheckBoxClass = "item-checkbox size-10 mt-4 shadow shadow-slate-100 rounded-full"
const itemParaContainerClass = "justify-evenly py-6 px-4 bg-slate-100 w-96 h-14 items-center flex mt-5 rounded-lg hover:bg-slate-300 shadow shadow-slate-100 "
const itemParaClass = "text-3xl"

// creates a new paragraph container with a checkbox, X button and a paragraph text
function showItem(string) {
    // creates new elements in preparation
    let itemContainer = document.createElement('div')
    let itemParaContainer = document.createElement('div')
    let itemRemoveButton = document.createElement('button')
    let itemCheckBox = document.createElement('input')
    let itemPara = document.createElement('p')

    itemRemoveButton.innerText = "X"

    // changes the item checbox into an actual checkbox
    itemCheckBox.type = "checkbox"

    // applies the tailwind class styling
    itemContainer.className = itemContainerClass
    itemParaContainer.className = itemParaContainerClass
    itemRemoveButton.className = itemRemoveButtonClass
    itemCheckBox.className = itemCheckBoxClass
    itemPara.className = itemParaClass

    // inserts the string insite the paragraph
    itemPara.innerText = string

    // inserts element id into the elements
    itemContainer.id = string
    itemRemoveButton.id = string

    // putting paragraph into the paragraph container
    itemParaContainer.appendChild(itemPara)

    // puts all the element into the item container
    itemContainer.appendChild(itemRemoveButton)
    itemContainer.appendChild(itemCheckBox)
    itemContainer.appendChild(itemParaContainer)

    // puts the item container element into the main class
    mainContainer.appendChild(itemContainer)

    // creates a query selector for all elements with the class item-remove
    let removeButton = document.querySelectorAll(".item-remove")

    // implements the remove feature for removeButton
    removeButton.forEach((element) => {
        element.addEventListener('click', () => {
            removeItem(element.id)
        })
    })
}

// removes an item with the given id
function removeItem(id) {
    // selects the given id
    let selected = document.getElementById(id)
    
    // removes the element by id from existing
    selected.parentNode.removeChild(selected)
}


// implements the add feature
todoButton.addEventListener('click', () => {
    // checks if the value is empty white space and if it is then just return
    if (todoInput.value.trim() == "") {
        return
    }
    showItem(todoInput.value)

    // clears the value in the submit box
    todoInput.value = ""  
})

// implements adding by just pressing the enter key feature
todoInput.addEventListener("keypress", (event) => {
    // checks if the enter key is pressed and calls the todoButton if so
    if (event.key === "Enter") {
      event.preventDefault();
      todoButton.click();
    }
  });
