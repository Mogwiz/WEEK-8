const addButton = document.getElementById("addButton");
const itemAdd = document.getElementById("answer");
const parent = document.getElementById("delete");
const deleteButton = document.createElement("button");
const added = document.createElement("p");
const message = document.getElementById("addedOrDeleted");
let myList = [];

addButton.addEventListener("click", () =>{
    if (!myList.includes(itemAdd.value)){
        myList.push(itemAdd.value);
        message.innerText = "";
    } else {
        message.innerText = "This iteam already exists";
    }
    console.log(myList);
})
