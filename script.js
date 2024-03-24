// selects the main container
const mainContainer = document.getElementById("main-container")

// tailwind class styling
const itemContainerClass = "flex gap-4 items-center"
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

    // putting paragraph into the paragraph container
    itemParaContainer.appendChild(itemPara)

    // puts all the element into the item container
    itemContainer.appendChild(itemRemoveButton)
    itemContainer.appendChild(itemCheckBox)
    itemContainer.appendChild(itemParaContainer)

    // puts the item container element into the main class
    mainContainer.appendChild(itemContainer)
}

// removes an item with the given id
function removeItem(id) {
    // selects the given id
    let selected = document.getElementById(id)
    
    // removes the element by id from existing
    selected.parentNode.removeChild(selected)
}

