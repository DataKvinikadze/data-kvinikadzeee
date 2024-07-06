const summary = document.querySelector(".summary");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const summaryTitle = document.createElement("div");
const title = document.createElement("h4");
title.textContent = "SUMMARY";

summaryTitle.classList.add("summary-title");
title.classList.add("title");

summaryTitle.appendChild(title);

const totalContainer = document.createElement("div");
const totalText = document.createElement("span");
let totalPrice = document.createElement("span");

totalText.textContent = "TOTAL";
totalPrice.textContent = `${calculateTotalPrice(cart)}`;

totalContainer.classList.add("total-container");
totalText.classList.add("total-text");
totalPrice.classList.add("total-price");

totalContainer.appendChild(totalText);
totalContainer.appendChild(totalPrice);

const shippingContainer = document.createElement("div");
const shippingText = document.createElement("span");
const shippingPrice = document.createElement("span");
shippingPrice.textContent = `$ 50`;
shippingText.textContent = "SHIPPING";
let shipPrice = 50;

shippingContainer.classList.add("shipping-container");
shippingText.classList.add("shipping-text");
shippingPrice.classList.add("shipping-price");

shippingContainer.appendChild(shippingText);
shippingContainer.appendChild(shippingPrice);

const grandTotalContainer = document.createElement("div");
const grandTotalText = document.createElement("span");
const grandtotalPrice = document.createElement("span");

grandTotalContainer.classList.add("grand-container");
grandTotalText.classList.add("grand-text");
grandtotalPrice.classList.add("grand-price");

grandTotalText.textContent = "GRAND TOTAL";
grandtotalPrice.textContent = calculateTotalPrice(cart) + shipPrice;

grandTotalContainer.appendChild(grandTotalText);
grandTotalContainer.appendChild(grandtotalPrice);

const checkOutContainer = document.createElement("div");
const checkOutBtn = document.createElement("button");

checkOutContainer.classList.add("checkout-container");
checkOutBtn.classList.add("checkout-btn");

checkOutBtn.textContent = "CONTINUE & PAY";

checkOutContainer.appendChild(checkOutBtn);

cart.forEach((element) => {
  console.log(element);
  const elementDiv = document.createElement("div");
  const productInfo = document.createElement("div");
  const imageDiv = document.createElement("div");
  const productNamePrice = document.createElement("div");

  const quantityDiv = document.createElement("div");

  elementDiv.classList.add("element");
  productInfo.classList.add("product-info");
  imageDiv.classList.add("image-container");
  productNamePrice.classList.add("info-container");
  quantityDiv.classList.add("quantity-container");

  // image
  const image = document.createElement("img");
  image.classList.add("product-image");
  image.src = `./assets/product/${element.img}`;

  imageDiv.appendChild(image);

  // product name / price

  const productName = document.createElement("span");
  productName.classList.add("product-name");
  const productPrice = document.createElement("span");
  productPrice.classList.add("product-price");

  productName.textContent = element.name;
  productPrice.textContent = element.price;

  productNamePrice.appendChild(productName);
  productNamePrice.appendChild(productPrice);

  productInfo.appendChild(imageDiv);
  productInfo.appendChild(productNamePrice);
  console.log(productInfo);

  // quantity

  const quantity = document.createElement("span");
  quantity.classList.add("quantity");
  quantity.textContent = element.quantity;

  quantityDiv.appendChild(quantity);

  // appending to Element div
  elementDiv.appendChild(productInfo);
  elementDiv.appendChild(quantityDiv);

  summary.appendChild(summaryTitle);
  summary.appendChild(elementDiv);
  summary.appendChild(totalContainer);
  summary.appendChild(shippingContainer);
  summary.appendChild(grandTotalContainer);
  summary.appendChild(checkOutContainer);
});

function calculateTotalPrice(cart) {
  return cart.reduce((sum, p) => sum + Number(p.quantity) * Number(p.price), 0);
}
