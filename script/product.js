const urlParams = new URLSearchParams(window.location.search);

const productId = parseInt(urlParams.get("id"));

fetch(`../../json/products.json`)
  .then((res) => res.json())
  .then((data) => {
    const currentProduct = data[productId - 1];
    console.log(currentProduct);

    // second section

    let productImgDiv = document.querySelector(".product-image");
    let productDescriptionDiv = document.querySelector(".product-description");

    const productImage = document.createElement("img");
    productImage.src = `../../assets/product/${currentProduct.img}`;

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

    // buttons
    let quantityCart = document.createElement("div");
    quantityCart.classList.add("quantity-cart");
    productDescriptionDiv.appendChild(quantityCart);

    let quantityDiv = document.createElement("div");
    quantityDiv.classList.add("quantity-div");

    let decrementButton = document.createElement("button");
    decrementButton.classList.add("decrement-btn");
    let incrementButton = document.createElement("button");
    incrementButton.classList.add("increment-btn");
    decrementButton.textContent = "-";
    incrementButton.textContent = "+";

    let quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.value = 1;
    quantityInput.min = 1;
    quantityInput.id = `quantityInput-${currentProduct}`;

    quantityCart.appendChild(quantityDiv);
    quantityDiv.appendChild(decrementButton);
    quantityDiv.appendChild(quantityInput);
    quantityDiv.appendChild(incrementButton);

    incrementButton.addEventListener("click", () => {
      quantityInput.value++;
    });

    decrementButton.addEventListener("click", () => {
      if (quantityInput.value != 1) {
        quantityInput.value--;
      }
    });

    // add to cart button
    let addToCart = document.createElement("div");
    let cartButton = document.createElement("button");
    cartButton.textContent = "ADD TO CART";

    addToCart.appendChild(cartButton);
    quantityCart.appendChild(addToCart);

    // third section
    let featuresDescriptionDiv = document.querySelector(".section-description");

    let featuresDescription = document.createElement("p");

    featuresDescription.classList.add("features-description");

    featuresDescriptionDiv.appendChild(featuresDescription);

    featuresDescription.textContent = currentProduct.features;

    // fourth section
  });
