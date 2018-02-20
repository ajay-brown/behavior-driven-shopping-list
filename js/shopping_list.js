class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(newShoppingListItem) {
    this.items.push(newShoppingListItem);
    return this.items;
  }
  removeItem(shoppingListItem) {
    if (this.items.length === 0) {
      return;
    }
    if (shoppingListItem) {
      throw new Error();
    }
    for (var i = 0; i < this.items.length; i++) {
      if (shoppingListItem === this.items[i]) {
        this.items.splice([i - 1], 1);
        return this.items;
      } else {
        this.items.pop();
        return this.items;
      }
    }
  }
  render() {
      const itemList;
    for (var i = 0; i < this.items.length; i++) {
     let item= this.items[i].render;
      itemList.push(item);
      return `<ul>${itemList}</ul>`
    }
  }
}
