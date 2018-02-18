class ShoppingListItem {
  constructor(name, description, is_done) {
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
  render(is_done) {
    const display = document.createElement("div");
    let completed = document.createElement("li");
    completed.className = "completed_" + is_done;
    display.innerHTML = completed;
    let name = document.createElement("div");
    name.innerHTML = name;
    display.appendChild(name);
    let description = document.createElement("div");
    description.innerHTML = description;
    display.appendChild(description);
  }
}
