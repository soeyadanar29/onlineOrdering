let carts = document.querySelectorAll(".add-cart");

let products = [
   {
      name : "Black Bean Burger",
      tag:"blackbeanburger",
      price:1500,
      inCart:0
  },
   {
      name : "Wild Salmon Burger",
      tag:"wildsalmonburger",
      price:2000,
      inCart:0
  },
   { 
      name : "Bison Burger",
      tag:"bisonburger",
      price:3000,
      inCart:0
   },
   {
      name : "Veggie Burger",
      tag:"veggieburger",
      price:2000,
      inCart:0
    },
    {
      name : "Strewberry Marshallo Milkshake",
      tag:"strawberrymarshallomilkshake",
      price:2000,
      inCart:0
    },
    {
      name : "Cool Mint Milkshake",
      tag:"coolmintmilkshake",
      price:2500,
      inCart:0
    },
    {
      name : "Vanilla Milkshake",
      tag:"vanillamilkshake",
      price:3000,
      inCart:0
    },
    {
      name: "Rasberry Milkshake",
      tag:"rasberrymilkshake",
      price:2500,
      inCart:0
    },
    {
      name : "Strawberry Cake",
      tag:"strawberrycake",
      price:2500,
      inCart:0
    },
    {
      name : "Blueberry Cake",
      tag:"blueberrycake",
      price:1500,
      inCart:0
    },
    {
      name : "Chocolate Cake",
      tag:"chocolatecake",
      price:2000,
      inCart:0
    },
    {
      name : "Rose Milk Cake",
      tag:"rosemilkcake",
      price:3000,
      inCart:0
    },
    {
      name : "Black Coffee",
      tag:"blackcoffee",
      price:1500,
      inCart:0
    },
    {
      name : "Espresso Coffee",
      tag:"espressocoffee",
      price:2500,
      inCart:0
    },
    {
      name : "Latte Coffee",
      tag:"lattecoffee",
      price:1500,
      inCart:0
    },
    {
      name : "Cappuccino Coffee",
      tag:"cappuccinocoffee",
      price:1200,
      inCart:0
    }
  
 ]
 for (let i=0; i < carts.length; i++){
  carts[i].addEventListener('click',()=>{
    cartNumbers(products[i]);
    totalCost(products[i]);
  })
}
//  function onLoadCartNumbers(){

//   let productNumbers = localStorage.getItem('cartNumbers');
//    if(productNumbers){
//     document.querySelector('.Cart span').textContent = productNumbers;
//   }
//  }
function cartNumbers(product){
   let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  if(productNumbers){
    localStorage.setItem('cartNumbers',productNumbers+1);
    document.querySelector('.Cart span').textContent =productNumbers+1;
  }else
  {
    localStorage.setItem('cartNumbers',1);
    document.querySelector('.Cart span').textContent =1;
  }
  setItems(product);
 
}
function setItems(product){
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  if(cartItems!=null){
    if(cartItems[product.tag]==undefined){
      cartItems ={
        ...cartItems,
        [product.tag]:product
      }
    }
    cartItems[product.tag].inCart+=1;
  }else{
      product.inCart =1;
     cartItems = {
        [product.tag]:product
      }
  }
  localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}

function totalCost(product){
  // console.log("The product price is",product.price);
  let cartCost = localStorage.getItem("totalCost");
  
  if(cartCost!=null){
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost",cartCost + product.price);
  }else{
  localStorage.setItem("totalCost",product.price);
     }
}
function displayCart(){
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  console.log(cartItems);
  let cartCost = localStorage.getItem("totalCost");
   let productContainer = document.querySelector(".products");
   
  if(cartItems && productContainer){
    productContainer.innerHTML = " ";
    Object.values(cartItems).map(item =>{
      productContainer.innerHTML += `
      <div class = "product">
      <img src = "./img/${item.tag}.jpg">
      <span>${item.name}</span>
      </div>
      <div class = "price">${item.price}</div>
      <div class = "quantity">
      <span>${item.inCart}</span>
      </div>
      <div class = "total">
      ${item.inCart* item.price}Kyats
      </div>
      `
    });
    productContainer.innerHTML +=
      `<div class = "basketTotalContainer">
      <h4 class = "backertTotalTitle">
      Basket Total ===
      </h4>
      <h4 class = "basketTotal"><span> ${ cartCost} Kyats</span></h4>
     ` ;
      
      productContainer.innerHTML +=` <a href = "Contact.html" id = "contact" >OK </a>`;
  }
 
}
displayCart();

//  onLoadCartNumbers();

// ${item.quantity}