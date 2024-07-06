let shoppingCartIcon = document.querySelector(".cart");
let closeBtn = document.querySelector(".close-btn");
let overlay = document.querySelector(".overlay");
// eventlisteneri shoping cartze, rata dawerisas gamochndes/gaqres
shoppingCartIcon.addEventListener("click", () => {
  let popup = document.querySelector(".pop-up");
  popup.classList.toggle("show");
  overlay.classList.toggle("show");
  updateCartPopup();
});

// igive close buttonze
closeBtn.addEventListener("click", () => {
  let popup = document.querySelector(".pop-up");
  popup.classList.remove("show");
});

// funqcia romelic mtlian fass tvlis
function calculateTotalPrice(cart) {
  //abrunebs
  return cart.reduce((sum, p) => sum + Number(p.quantity) * Number(p.price), 0);
}

// funqcia romelic anaxlebs carts
function updateCartPopup() {
  // mogvaqvs cartis informacia. tu aris mashin moaqvs chveulebrivad sxva shemtxvevashi ubralod array
  let cart = JSON.parse(localStorage.getItem("cart") || []);

  // totalshi inaxavs mtlian fass
  let total = calculateTotalPrice(cart);

  const popup = document.querySelector(".pop-up");
  // yovel dawerisas washlis text-contents radgan ar daiweros tavidan ramodenime producti
  popup.textContent = "";
  let productList = document.createElement("div");
  productList.classList.add("product-list");

  cart.forEach((product, index) => {
    // pop-up header section
    // pop-up element section
    const itemElement = document.createElement("div");
    itemElement.classList.add("product-item");

    let productInfo = document.createElement("div");
    productInfo.classList.add("product-summary");

    // img section
    const productImgDiv = document.createElement("div");
    productImgDiv.classList.add("image-container");
    const productImg = document.createElement("img");
    productImg.classList.add("product-image");
    productImg.src = `./assets/product/${product.img}`;

    // price and name section
    const productNamePriceDiv = document.createElement("div");
    productNamePriceDiv.classList.add("product-info");

    const productName = document.createElement("span");
    productName.classList.add("product-name");
    const productPrice = document.createElement("span");
    productPrice.classList.add("product-price");

    productPrice.textContent = product.price;
    productName.textContent = product.name;

    // quantity and remove btn section
    const productQuantityRemoveDiv = document.createElement("div");
    productQuantityRemoveDiv.classList.add("quantity-controls");

    const quantity = document.createElement("span");
    quantity.classList.add("quantity");
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-button");
    quantity.textContent = product.quantity;
    removeBtn.textContent = "REMOVE";

    removeBtn.addEventListener("click", function () {
      // Removes the item at the specified index // 2 argumenti. pirveli index, meore ramdeni waishalos
      cart.splice(index, 1);
      // Saves the updated cart to local storage
      localStorage.setItem("cart", JSON.stringify(cart));
      // Updates the cart popup to reflect the changes
      updateCartPopup();
    });

    productNamePriceDiv.appendChild(productName);
    productNamePriceDiv.appendChild(productPrice);

    productQuantityRemoveDiv.appendChild(quantity);
    productQuantityRemoveDiv.appendChild(removeBtn);

    productImgDiv.appendChild(productImg);

    productInfo.appendChild(productImgDiv);
    productInfo.appendChild(productNamePriceDiv);

    itemElement.appendChild(productInfo);

    itemElement.appendChild(productQuantityRemoveDiv);
    productList.appendChild(itemElement);
    popup.appendChild(productList);
  });

  const popUpHeader = document.createElement("div");
  popUpHeader.classList.add("popup-header");
  const header = document.createElement("h3");
  header.classList.add("header");
  const removeAllBtn = document.createElement("button");
  removeAllBtn.classList.add("remove-all");
  header.textContent = `CART(${cart.length})`;
  removeAllBtn.textContent = "Remove All";
  popUpHeader.appendChild(header);
  popUpHeader.appendChild(removeAllBtn);

  removeAllBtn.addEventListener("click", () => {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartPopup();
  });

  let CheckoutDiv = document.createElement("div");
  CheckoutDiv.classList.add("checkout-div");
  let CheckoutBtn = document.createElement("button");
  CheckoutBtn.classList.add("checkout-btn");
  CheckoutBtn.textContent = "CHECKOUT";
  let TotalContainer = document.createElement("div");
  TotalContainer.classList.add("total-container");
  let totalPrice = document.createElement("span");
  totalPrice.classList.add("total-price");
  let totalText = document.createElement("span");
  totalText.classList.add("total-text");
  totalText.textContent = "TOTAL";
  totalPrice.textContent = `$${total}`;
  CheckoutDiv.appendChild(CheckoutBtn);
  TotalContainer.appendChild(totalText);
  TotalContainer.appendChild(totalPrice);
  popup.prepend(popUpHeader);
  popup.appendChild(TotalContainer);
  popup.appendChild(CheckoutDiv);

  CheckoutBtn.addEventListener("click", () => {
    window.location.href = "../checkout.html";
  });
}
