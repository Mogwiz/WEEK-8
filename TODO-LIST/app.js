const addButton = document.getElementById("addButton");
const itemAdd = document.getElementById("answer");
const parent = document.getElementById("delete");
const deleteButton = document.createElement("button");
const added = document.createElement("p");
const message = document.getElementById("addedOrDeleted");
let myList = [];
let clickCount = -1;
const divItem = document.createElement("div");

addButton.addEventListener("click", () =>{
    if (!myList.includes(itemAdd.value)){
        myList.push(itemAdd.value);
        message.innerText = "";

        const divItem = document.createElement("div");
        divItem.classList.add("item");
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteButt");
        const added = document.createElement("p");
        added.classList.add("whatAdd");
        
        deleteButton.innerText = "Delete";
        added.innerText = itemAdd.value;

        clickCount++;
        localStorage.setItem(`item${clickCount}`, itemAdd.value);

    deleteButton.addEventListener("click", function() {
        const index = myList.indexOf(added.innerText);
        console.log(index);
        localStorage.removeItem(`item${index}`);
        myList.splice(index, 1);
        parent.removeChild(this.parentElement);
        message.innerText = `${added.innerText} deleted`;
        clickCount--;
    });

    divItem.appendChild(deleteButton);
    divItem.appendChild(added);
    parent.appendChild(divItem);

    } else {
    message.innerText = "This item already exists, please delete";
    }
});
