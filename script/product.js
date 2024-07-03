const urlParams = new URLSearchParams(window.location.search);

const productId = parseInt(urlParams.get("id"));

fetch(`./json/products.json`)
  .then((res) => res.json())
  .then((data) => {
    const currentProduct = data[productId - 1];
    console.log(currentProduct);

    // second section

    let productImgDiv = document.querySelector(".product-image");
    let productDescriptionDiv = document.querySelector(".product-description");

    const productImage = document.createElement("img");
    productImage.src = `./assets/product/${currentProduct.img}`;

    let productHeader = document.createElement("h2");
    let productInfo = document.createElement("p");
    let productSpan = document.createElement("span");

    let productPrice = document.createElement("span");

    productHeader.classList.add("product-header");
    productInfo.classList.add("product-info");
    productSpan.classList.add("product-span");

    productPrice.classList.add("product-price");

    productSpan.textContent = "NEW PRODUCT";
    productInfo.textContent = currentProduct.description;
    productHeader.textContent = currentProduct.name;
    productPrice.textContent = `$${currentProduct.price}`;

    productDescriptionDiv.appendChild(productSpan);
    productDescriptionDiv.appendChild(productHeader);
    productDescriptionDiv.appendChild(productInfo);
    productDescriptionDiv.appendChild(productPrice);

    productImgDiv.appendChild(productImage);

    //! buttons

    //! creating quantity button
    let quantityCart = document.createElement("div");
    quantityCart.classList.add("quantity-cart");
    productDescriptionDiv.appendChild(quantityCart);

    let quantityDiv = document.createElement("div");
    quantityDiv.classList.add("quantity-div");

    //! creating increment/decrement button

    let decrementButton = document.createElement("button");
    decrementButton.classList.add("decrement-btn");
    let incrementButton = document.createElement("button");
    incrementButton.classList.add("increment-btn");
    decrementButton.textContent = "-";
    incrementButton.textContent = "+";

    //! creating quantity input
    let quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.value = 1;
    quantityInput.min = 1;
    quantityInput.id = `quantityInput-${currentProduct}`;

    quantityCart.appendChild(quantityDiv);
    quantityDiv.appendChild(decrementButton);
    quantityDiv.appendChild(quantityInput);
    quantityDiv.appendChild(incrementButton);

    //! event listeners on increment/decrement buttons
    incrementButton.addEventListener("click", () => {
      parseInt(quantityInput.value++);
    });

    decrementButton.addEventListener("click", () => {
      if (quantityInput.value != 1) {
        parseInt(quantityInput.value--);
      }
    });

    //! creating add to cart button

    let addToCart = document.createElement("div");
    addToCart.classList.add("add-cart-div");
    let cartButton = document.createElement("button");
    cartButton.classList.add("add-cart-btn");
    cartButton.textContent = "ADD TO CART";

    addToCart.appendChild(cartButton);
    quantityCart.appendChild(addToCart);

    cartButton.addEventListener("click", () => {
      const quantity = parseInt(quantityInput.value);

      addToCartFunc({ ...currentProduct, quantity });
    });

    //

    //

    // third section
    let featuresDescriptionDiv = document.querySelector(".section-description");

    let featuresDescription = document.createElement("p");

    featuresDescription.classList.add("features-description");

    featuresDescriptionDiv.appendChild(featuresDescription);

    featuresDescription.textContent = currentProduct.features;

    // fourth section
    currentProduct.additionalImages.forEach((element, index) => {
      let sectionDiv = document.querySelector(".grid");
      const photoDiv = document.createElement("div");
      photoDiv.classList.add(`grid-item-${index + 1}`);
      const productImage = document.createElement("img");
      productImage.src = `./assets/product/secondaryImages/${element}`;
      photoDiv.appendChild(productImage);
      sectionDiv.appendChild(photoDiv);
    });
  });

function addToCartFunc(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingPorductIndex = cart.findIndex((p) => p.id === product.id);

  if (existingPorductIndex >= 0) {
    cart[existingPorductIndex].quantity += product.quantity;
  } else {
    cart.push(product);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartPopup();
}
