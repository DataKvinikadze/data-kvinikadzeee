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
    productDescriptionDiv.appendChild(productPrice);

    productImgDiv.appendChild(productImage);

    // buttons
    let amount = document.querySelector(".amount");
    let minusButton = document.querySelector(".minus");
    let plusButton = document.querySelector(".plus");

    let x = 0;
    amount.textContent = x;
    minusButton.addEventListener("click", () => {
      if (x > 0) {
        x--;
        amount.textContent = x;
      }
    });
    plusButton.addEventListener("click", () => {
      x++;
      amount.textContent = x;
    });
    // third section
    let featuresDescriptionDiv = document.querySelector(".section-description");

    let featuresDescription = document.createElement("p");

    featuresDescription.classList.add("features-description");

    featuresDescriptionDiv.appendChild(featuresDescription);

    featuresDescription.textContent = currentProduct.features;

    // fourth section
    let gridDiv = document.querySelector(".grid");

    let imgOne = document.createElement("img");
    let imgTwo = document.createElement("img");
    let imgThree = document.createElement("img");
    // imgOne.src = `../../assets/product/secondaryImages/`
    // imgTwo
    // imgThree
  });
