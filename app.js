const newShoppingList = new ShoppingList();

let itemList = newShoppingList.render();
document.getElementById("content").innerHTML = itemList;

function add_to_shopping_list(name, description) {
  let itemTitle = document.getElementById("GET-name").value;
  let itemDescription = document.getElementById("GET-description").value;
  const newShoppingListItem = new ShoppingListItem(itemTitle, itemDescription);
  newShoppingList.addItem.addItem(newShoppingListItem);
  document.getElementById("content").innerHTML = itemList;
}
