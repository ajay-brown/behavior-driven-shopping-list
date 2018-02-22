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
  console.log("hi");
}
