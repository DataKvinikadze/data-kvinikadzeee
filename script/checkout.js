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

const elementContainer = document.createElement("div");
elementContainer.classList.add("element-container");

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

  // quantity

  const quantity = document.createElement("span");
  quantity.classList.add("quantity");
  quantity.textContent = element.quantity;

  quantityDiv.appendChild(quantity);

  // appending to Element div
  elementDiv.appendChild(productInfo);
  elementDiv.appendChild(quantityDiv);

  elementContainer.appendChild(elementDiv);
});

summary.appendChild(summaryTitle);
summary.appendChild(elementContainer);
summary.appendChild(totalContainer);
summary.appendChild(shippingContainer);
summary.appendChild(grandTotalContainer);
summary.appendChild(checkOutContainer);

function calculateTotalPrice(cart) {
  return cart.reduce((sum, p) => sum + Number(p.quantity) * Number(p.price), 0);
}

// creating checkout popup

const popUp = document.querySelector(".checkout-pop-up");

const imageContainer = document.createElement("div");
const image = document.createElement("img");
image.src = "../assets/svg/pop.svg";

imageContainer.classList.add("image-container");
image.classList.add("popup-image");

imageContainer.appendChild(image);

const textContainer = document.createElement("div");
const thankText = document.createElement("span");
thankText.textContent = "THANK YOU FOR YOUR ORDER";

textContainer.classList.add("text-container");
thankText.classList.add("thank-text");

textContainer.appendChild(thankText);

const subContainer = document.createElement("div");
const subText = document.createElement("span");
subText.textContent = "You will receive an email confirmation shortly.";

subContainer.classList.add("sub-container");
subText.classList.add("sub-text");

subContainer.appendChild(subText);

const buttonContainer = document.createElement("div");
const button = document.createElement("button");
button.textContent = "BACK TO HOME";

buttonContainer.classList.add("button-container");
button.classList.add("back-to-home");

buttonContainer.appendChild(button);

popUp.appendChild(imageContainer);

popUp.appendChild(textContainer);
popUp.appendChild(subContainer);
popUp.appendChild(buttonContainer);

// validation
let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let validationText = document.querySelectorAll(".error");

console.log(validationText);
checkOutBtn.addEventListener("click", (event) => {
  let valid = true;
  event.preventDefault();
  input.forEach((element, index) => {
    const inputValue = element.value.trim();

    // if (inputValue === "") {
    //   validationText[index].textContent = "You Must Enter a Value!";
    //   validationText[index].style.display = "block";
    //   input[index].classList.add("input-validation");
    //   valid = false;
    // } else {
    //   // inputLable[index].classList.remove("id-error");
    //   validationText[index].style.display = "none";
    //   input[index].classList.remove("input-validation");
    // }
  });
  if (valid == true) {
    popUp.classList.add("shown");
    const overlay = document.querySelector(".overlay");
    overlay.classList.add("shown");
  }
});

button.addEventListener("click", () => {
  form.submit();
  popUp.classList.remove("shown");
  window.location.href = "../index.html";
  let cart = JSON.parse(localStorage.getItem("cart") || []);
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartPopup();
});
