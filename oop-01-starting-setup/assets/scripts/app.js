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
  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }

  render() {}

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
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.item.reduce((preValue, curValue) => {
      return preValue + curValue.price;
    }, 0);
    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId, false);
    this.orderProduct = () => {
      console.log("Ordering...");
      console.log(this.item);
    };
    this.render();
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
    // cartEl.className = "cart";
    const orderButton = cartEl.querySelector("button");
    // orderButton.addEventListener("click", this.orderProduct.bind(this));
    // orderButton.addEventListener("click", () => this.orderProduct());
    orderButton.addEventListener("click", this.orderProduct);

    this.totalOutput = cartEl.querySelector("h2");
    // return cartEl;
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId, false);
    this.product = product;
    this.render();
  }

  addToCart() {
    // console.log("Adding the product to the cart...");
    // console.log(this.product);
    // ShoppingCart.addProduct();
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement("li", "product-item");
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
  }
}

class ProductList extends Component {
  #products = [];

  constructor(renderHookId) {
    super(renderHookId, false);
    this.render();
    this.fetchProduct();
  }

  fetchProduct() {
    this.#products = [
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
    this.renderProducts();
  }

  renderProducts() {
    for (const prod of this.#products) {
      new ProductItem(prod, "prod-list");
    }
  }

  render() {
    this.createRootElement("ul", "product-list", [
      new ElementAttribute("id", "prod-list")
    ]);
    // const prodList = document.createElement("ul");
    // prodList.id = "pro-list";
    // prodList.className = "product-list";
    if (this.#products && this.#products.length > 0) {
      this.renderProducts();
    }
  }
}

class Shop {
  constructor() {
    this.render();
  }
  render() {
    // const renderHook = document.getElementById("app");

    this.cart = new ShoppingCart("app");
    new ProductList("app");
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
