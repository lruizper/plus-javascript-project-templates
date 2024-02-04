let shoppingListItems = ["Milk", "Bread", "Eggs", "Butter", "Cheese"];
const shoppingList = document.getElementById("shopping-list-items");


function updateItems() {
    shoppingList.innerHTML = "";
    for (const item of shoppingListItems) {
        const listItem = document.createElement("li");
        listItem.innerText = item;
        shoppingList.appendChild(listItem);
    }
}

let listElement = document.getElementById("shopping-list-items");
for (const shoppingItem of shoppingListItems) {
    let itemElement = document.createElement("li");
    itemElement.innerText = shoppingItem;
    listElement.appendChild(itemElement);
    // console.log(shoppingItem);
}

function addItem() {
    let input = document.getElementById("new-item-text");
    const item = input.value;
    shoppingListItems.push(item);
    updateItems();
    input.value = '';
    // console.log(shoppingListItems);
}

function clearList() {
    shoppingListItems = [];
    updateItems();
  }