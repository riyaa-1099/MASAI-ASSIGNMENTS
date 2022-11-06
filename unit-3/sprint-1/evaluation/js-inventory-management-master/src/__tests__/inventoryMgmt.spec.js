const { addData} = require("../scripts/index");
const { append, remove } = require("../scripts/inventory");
const fs = require("fs");
const path = require("path");
const indexFile = fs.readFileSync(
  path.resolve(__dirname, "../../index.html"),
  "utf8"
);
const inventoryFile = fs.readFileSync(
  path.resolve(__dirname, "../../inventory.html"),
  "utf8"
);

global.score = 1;
// jest.setTimeout(10000);

jest.dontMock("fs");

describe("Inventory management", function () {
  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
    fetch.resetMocks();
  });

  it("HTML elements and styles are present in index file and inventory file", function () {
    document.documentElement.innerHTML = indexFile.toString();

    expect(document.getElementById("product_form")).toBeTruthy()
    expect(document.getElementById("product_name")).toBeTruthy()
    expect(document.getElementById("product_brand")).toBeTruthy()
    expect(document.getElementById("product_price")).toBeTruthy()
    expect(document.getElementById("product_image")).toBeTruthy()

    document.documentElement.innerHTML = inventoryFile.toString();
    var parent = document.getElementById("products_data")
    expect(parent.style.display).toBe("grid")
    expect(parent.style.gridTemplateColumns.split(" ").length).toBe(3)

    global.score += 1
  });

  it("Add products is working properly in local storage", function () {
    document.documentElement.innerHTML = indexFile.toString();
    
    addData("Flip Phone", "Samsung", 69999, "hhtps://" )

    var items = JSON.parse(localStorage.getItem("data"))
    expect(items.length).toBe(1)
    expect(items[0].name).toBe("Flip Phone")
    expect(items[0].brand).toBe("Samsung")
    expect(items[0].price).toBe(69999)
    expect(items[0].image).toBe("hhtps://")

    global.score += 2
  });

  it("Add products is working properly in local storage-2", function () {
    document.documentElement.innerHTML = indexFile.toString();
    
    addData("laptop", "lenevo", 29999, "hhtps://" )

    var items = JSON.parse(localStorage.getItem("data"))
    expect(items.length).toBe(2)
    expect(items[1].name).toBe("laptop")
    expect(items[1].brand).toBe("lenevo")
    expect(items[1].price).toBe(29999)
    expect(items[1].image).toBe("hhtps://")

    global.score += 1
  });


  it("Show products is working properly on DOM", function () {
    document.documentElement.innerHTML = inventoryFile.toString();

    append()
    var parent = document.getElementById("products_data")
    expect(parent.children.length).toBe(2)

    document.documentElement.innerHTML = indexFile.toString();
    addData("Tshirt", "Zara", 1999, "hhtps://")

    document.documentElement.innerHTML = inventoryFile.toString();
    append()
    var parent = document.getElementById("products_data")
    expect(parent.children.length).toBe(3)

    global.score += 2
  });

  it("remove products is working properly on local storage", function () {
    document.documentElement.innerHTML = inventoryFile.toString();
    remove(1)

    var items = JSON.parse(localStorage.getItem("data"))
    expect(items[1].name).toBe("Tshirt")
    expect(items[1].brand).toBe("Zara")
    expect(items[1].price).toBe(1999)
    expect(items[1].image).toBe("hhtps://")

    global.score += 2
  });

  it("remove products is working properly on DOM", function () {
    document.documentElement.innerHTML = inventoryFile.toString();
    remove(1)

    var parent = document.getElementById("products_data")
    expect(parent.children.length).toBe(1)

    global.score += 1
  });

});

afterAll(() => {
  console.log("Final Score is", global.score);
});