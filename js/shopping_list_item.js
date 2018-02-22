class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.is_done = false;
  }
  check() {
    let is_done = true;
  }
  uncheck() {
    let is_done = false;
  }
  render() {
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    list.appendChild(checkbox);
    checkbox.onchange = changeCheckedStatus(idx, checkbox);
    let removeButton = document.createElement("button");
    removeButton.className = "removeButton";
    let btnText = document.createTextNode("X");
    removeButton.appendChild(btnText);
    list.appendChild(removeButton);
    // removeButton.addEventListener("click", removeItemButton(){
    // });

    return `<li class="completed_${this.is_done}"><span>${
      this.name
    } </span><span>${this.description}</span></li>`;
  }
}
