class Product {
  // title = "DEFAULT";
  // imageUrl;
  // price;
  // description;

  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
}

class ElementAttribute {
  constructor(attName, attValue) {
    this.name = attName;
    this.value = attValue;
  }
}

class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
  }

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const att of attributes) {
        rootElement.setAttribute(att.name, att.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  item = [];

  set cartItems(value) {
    this.item = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount}</h2>`;
  }

  get totalAmount() {
    const sum = this.item.reduce((preValue, curValue) => {
      return preValue.price + curValue.price;
    }, 0);
    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.item];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = this.createRootElement("section", "cart");
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    cartEl.className = "cart";
    this.totalOutput = cartEl.querySelector("h2");
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    // console.log("Adding the product to the cart...");
    // console.log(this.product);
    // ShoppingCart.addProduct();
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}">
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
    const addCartBtn = prodEl.querySelector("button");
    addCartBtn.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-pillows-for-snoring-1583781181.png?crop=0.625xw:0.916xh;0.194xw,0.0835xh&resize=640:*",
      19.99,
      "A soft pillow!"
    ),
    new Product(
      "A Carpet",
      "https://secure.img1-fg.wfcdn.com/im/68940585/resize-h800%5Ecompr-r85/3097/30973428/Traditional+Teachings+Area+Rug.jpg",
      89.99,
      "A carpet which you might like - or not!"
    )
  ];
  constructor() {}

  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");

    this.cart = new ShoppingCart("app");
    this.cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(prodListEl);
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
