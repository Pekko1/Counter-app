// const counterDisplay = document.querySelector("#counter")
// const addButton = document.querySelector("#add-button")
// const removeButton = document.querySelector("#remove-button")
// const saveButton = document.querySelector("#save-button")
// const saveDiv = document.querySelector("#save")

const container = document.createElement("div");
container.classList.add("container");

const containerButton = document.createElement("div");
containerButton.classList.add("container-button");

// const counterDisplay = document.createElement("div");
// counterDisplay.id = "counter";
// counterDisplay.textContent = "0";

// const addButton = document.createElement("button");
// addButton.id = "add-button";
// addButton.textContent = "Add";

// const removeButton = document.createElement("button");
// removeButton.id = "remove-button";
// removeButton.textContent = "Remove";

// const saveButton = document.createElement("button");
// saveButton.id = "save-button";
// saveButton.textContent = "Save";

// const saveDiv = document.createElement("div");
// saveDiv.id = "save";


function create(tag, id, content){
    const element = document.createElement(tag)
    element.id = id
    element.textContent = content
    return element
}

const counterDisplay = create ("div", "counter", "0")
// const addButton = create ("button", "add-button", "Add")
const addButton = create ("button", "add-button", "+")
// const removeButton = create ("button", "remove-button", "Remove")
const removeButton = create ("button", "remove-button", "-")
const saveButton = create ("button", "save-button", "Save")

const saveDiv = create ("div", "save", "")
saveDiv.style.display = "none"

const resetButton = create("button", "reset-button", "Reset")
resetButton.style.display = "none"

// container.appendChild(counterDisplay);
// container.appendChild(addButton);
// container.appendChild(removeButton);
// container.appendChild(saveButton);
// container.appendChild(saveDiv);

// container.append(counterDisplay, addButton, removeButton, saveButton, saveDiv, resetButton)
container.append(counterDisplay, containerButton, saveButton, saveDiv, resetButton)
containerButton.append(addButton, removeButton)

document.body.appendChild(container);

let counter = 0

addButton.addEventListener("click", function(){
    counter += 1
    render(counter)
})

removeButton.addEventListener("click", function(){
    if (counter>0){
        counter -= 1
        render(counter)
    }
})

function render(value){
    counterDisplay.textContent= value
}

saveButton.addEventListener("click", function(){
    
    if (save.textContent === ""){
        save.textContent += counter
    } else{
        save.textContent += "-" + counter 
    }
    counter = 0
    render(counter)

    resetButton.style.display = "block"
    saveDiv.style.display = "block"

})

resetButton.addEventListener("dblclick", function(){

    saveDiv.textContent = ""
    resetButton.style.display = "none"
    saveDiv.style.display = "none"

})

let alertDisplay = false

resetButton.addEventListener("click", function(){

    if (alertDisplay===false){
        setTimeout(function(){ 
            alert("double click to reset")
            alertDisplay=true
        }, 100)
        
    }

})