class ShoppingListItem {
  constructor(name, description, is_done) {
    this.name = name;
    this.description = description;
    this.is_done = false;
  }
  check() {
    this.is_done = true;
  }
  uncheck() {
    this.is_done = false;
  }
  render() {
    let display = getElementById("mocha");
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
