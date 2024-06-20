let products = document.querySelector(".products");

fetch("../json/products.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      // creating product div
      let productDiv = document.createElement("div");
      // adding classes for main product div
      productDiv.classList.add("product");

      // adding images
      let imgDiv = document.createElement("div");
      let productImg = document.createElement("img");
      productImg.src = `../assets/product/${element.img}`;

      // adding classes for images
      imgDiv.classList.add("image-div");
      productImg.classList.add("image");

      // creating Text div
      let textDiv = document.createElement("div");
      let productHeader = document.createElement("h2");
      let productInfo = document.createElement("p");
      let productButton = document.createElement("button");
      let productSpan = document.createElement("span");

      // adding classes for product textDiv
      textDiv.classList.add("product-text");
      productHeader.classList.add("product-header");
      productInfo.classList.add("product-info");
      productButton.classList.add("product-button");
      productSpan.classList.add("product-span");

      // adding content
      productSpan.textContent = "New Product";
      productHeader.textContent = element.name;
      productInfo.textContent = element.description;
      productButton.textContent = "SEE PRODUCT";

      // appending

      // textDiv
      textDiv.appendChild(productSpan);
      textDiv.appendChild(productHeader);
      textDiv.appendChild(productInfo);
      textDiv.appendChild(productButton);

      // images
      imgDiv.appendChild(productImg);

      // productDiv
      productDiv.appendChild(imgDiv);
      productDiv.appendChild(textDiv);
      products.appendChild(productDiv);
    });
  });
