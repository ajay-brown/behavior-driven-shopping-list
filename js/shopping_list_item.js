class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.is_done = is_done;
  }
  check() {
    let is_done = true;
  }
  uncheck() {
    let is_done = false;
  }
  render() {
    return `<li class="completed_${this.is_done}"><span>${
      this.name
    } </span><span>${this.description}</span></li>`;
  }
}
module.exports = ShoppingListItem;
