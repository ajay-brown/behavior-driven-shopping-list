const expect = chai.expect;
chai.should();

describe("ShoppingListItem", function() {
  beforeEach(function() {
    newShoppingListItem = new ShoppingListItem();
  });
  it("Create a class called ShoppingListItem", function() {
    expect(new ShoppingListItem()).to.be.an.instanceof(ShoppingListItem);
  });

  it("ShoppingListItem has a property 'name' ", function() {
    expect(new ShoppingListItem()).to.have.property("name");
  });
  it("ShoppingListItem has a property 'description' ", function() {
    expect(new ShoppingListItem()).to.have.property("description");
  });
  it("ShoppingListItem has a property 'is_done' ", function() {
    expect(new ShoppingListItem()).to.have.own.property("is_done");
  });
  it("ShoppingListItem has a constructor method that accepts two arguments 'name' and 'description'  ", function() {
    let name = "avocado";
    let description = "Must be eaten immediately";
    expect(name).to.be.a("string");
    expect(description).to.be.a("string");
  });
  it("ShoppingListItem has method named 'check', calling the instance's 'check' method will set 'is_done' property to true", function() {
    expect(new ShoppingListItem()).to.respondTo("check");
    var spy = sinon.spy(newShoppingListItem, "check");
    spy();
    expect(spy).to.be.calledOn(sinon.match());
    //
  });
  it("ShoppingListItem has method named 'uncheck', calling the instance's 'uncheck' method will set is_done property to false ", function() {
    expect(new ShoppingListItem()).to.respondTo("uncheck");
    var spy = sinon.spy(newShoppingListItem, "uncheck");
    spy();
    expect(spy).to.be.calledOn(sinon.match());
  });
  it("ShoppingListItem has method named 'render', calling the instance's 'render' method will construct and return an html formatted string, the string will be wrapped in li tags", function() {
    expect(new ShoppingListItem()).to.respondTo("render");
    var spy = sinon.spy(newShoppingListItem, "render");
    newShoppingListItem.render();
    expect(spy).calledWith();
  });
});

describe("ShoppingList", function() {
  beforeEach(function() {
    newShoppingList = new ShoppingList();
  });
  it("ShoppingList is a class", function() {
    expect(new ShoppingList()).to.be.an.instanceof(ShoppingList);
  });
  it("ShoppingList has a property named 'items'", function() {
    expect(new ShoppingList()).to.have.property("items");
  });
  it("ShoppingList has a constructor method that initializes 'items' as an empty array", function() {
    expect([]).to.be.an("array").that.is.empty;
  });
  it("ShoppingList has a method named 'addItem' that accepts one ShoppingListItem argument", function() {
    expect(new ShoppingList()).to.respondTo("addItem");
  });
  it("Invoking the 'addItem' method by passing in a ShoppingListItem object should add that object to the 'items' array.", function() {
    var newShoppingListItem = "avocado";
    newShoppingList.addItem(newShoppingListItem);
    var spy = sinon.spy(new ShoppingList(), "addItem");
    expect(spy).to.have.been.calledWith("newShoppingListItem");
    expect([]).to.have.lengthOf(1);
  });
  it(" Invoking the 'addItem' method by passing in anything else that is not a ShoppingListItem object should throw an error", function() {
    var num = 45;
    expect(addItem).to.not.satisfy(function(num) {
      addItem = num;
    });
    expect(addItem).to.throw();
  });
  it("ShoppingList has a method named 'removeItem' that accepts a simple ShoppingListItem argument", function() {
    expect(ShoppingList).to.respondTo("removeItem");
    var spy = sinon.spy(ShoppingList, "removeItem");
    expect(spy).to.have.been.calledWith("ShoppingListItem");
  });
  it("Invoking the 'removeItem' method by passing in a ShoppingListItem object(that exists in the 'items' array) should remove that object from the items array", function() {
    var spy = sinon.spy(ShoppingList, "removeItem");
    expect(spy).to.have.been.called;
    expect(items).to.be.empty;
  });
  it("Invoking the 'removeItem' with no parameters should remove the last item in the 'items' list, if there are any items, else it does nothing", function() {
    let items = [1, 2, 3];
    var spy = sinon.spy(ShoppingList, "removeItem");
    expect(spy).to.have.been.called;
    expect(items).to.deep.equal([1, 2]);
  });
  it("Invoking the 'removeItem' method by passing in anything else that is not a ShoppingListItem object (that exists in the 'items' array) should throw an error", function() {
    var num = 45;
    expect(removeItem).to.not.satisfy(function(num) {
      addItem = num;
    });
    expect(removeItem).to.throw();
  });
  it("ShoppingList has a method named 'render'", function() {
    expect(ShoppingListItem).to.respondTo("render");
    var spy = sinon.spy(ShoppingList, "render");
    expect(spy).to.have.property("ul");
    expect(spy).to.have.string(``);
  });
});
