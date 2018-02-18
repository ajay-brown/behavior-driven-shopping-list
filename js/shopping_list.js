class ShoppingList {
  constructor(items) {
    this.items = [];
  }

  addItem(newShoppingListItem, items) {
    this.items.push(newShoppingListItem);
    return this.items;
  }
}
