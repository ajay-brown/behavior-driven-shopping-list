import { ShoppingList } from "./shopping_list.js";
import {ShoppingListItem} from ("./shopping_list_item.js");
const newShoppingList = new ShoppingList();

let itemList = newShoppingList.render();
document.getElementById("content").innerHTML = itemList;
document.getElementById("list").innerHTML = "hi";

function add_to_shopping_list(name, description) {
  let itemTitle = document.getElementById("GET-name").value;
  let itemDescription = document.getElementById("GET-description").value;
  const newShoppingListItem = new ShoppingListItem(itemTitle, itemDescription);
  newShoppingList.addItem.addItem(newShoppingListItem);
  document.getElementById("list").innerHTML = "hi";
  document.getElementById("content").innerHTML = itemList;
}
