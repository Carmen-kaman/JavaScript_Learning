class Product {
  title = "DEFAULT";
  imageUrl;
  price;
  description;

  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
}

const productList = {
  products: [
    new Product(
      "A Pillow",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-pillows-for-snoring-1583781181.png?crop=0.625xw:0.916xh;0.194xw,0.0835xh&resize=640:*",
      19.99,
      "A soft pillow!"
    ),
    new Product(
      "A Carpet",
      "https://lh3.googleusercontent.com/proxy/Nkcf1PURArLAs0PeeOp8j4VnvhIU2EKnstXP6H4Nqk_xnOjhQHL1bdTNz_WustAPus1vlQz6v0NeRHVA_cj6G0kqwrkjXrSK9VU5nVCkFDVewCOMdN8spk61uy7O9ojWJMVlPbY",
      89.99,
      "A carpet which you might like - or not!"
    )
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}">
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
};

productList.render();
