const newShoppingList = new ShoppingList();

let itemList = newShoppingList.render();

function add_to_shopping_list(name, description) {
  let itemTitle = document.getElementById("GET-name").value;
  let itemDescription = document.getElementById("GET-description").value;
  const newShoppingListItem = new ShoppingListItem(itemTitle, itemDescription);
  newShoppingList.addItem(newShoppingListItem);
  let listArea = document.getElementById("list");
  let listItemSpace = document.createElement("p");
  listItemSpace.innerHTML = newShoppingListItem.render();
  list.appendChild(listItemSpace);
}
function changedCheckedStatus(idx, checkbox) {
  newShoppingList.forEach(newShoppingListItem => {
    if (newShoppingListItem === idx && checkbox.checked === false) {
      if (newShoppingListItem.is_done === false) {
        console.log("done!");
        check();
      } else if (
        newShoppingListItem.is_done === true &&
        checkbox.checked === true
      ) {
        console.log("undone!");
        uncheck();
      }
    }
  });
}
