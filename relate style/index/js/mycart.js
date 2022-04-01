var cartData = JSON.parse(localStorage.getItem("carting"));
console.log(cartData);

var total = cartData.reduce(function (sum, elem, index, arr) {
  return sum + Number(elem.price*elem.quant);
}, 0);

var length = cartData.length;
console.log(length);


console.log(total);

document.querySelector(
  "#shift"
).innerText = ` Total is Rs. ${total} and in cart  items total is  ${length}`;



cartData.map(function (elem, index) {
  var box = document.createElement("div");

  var img = document.createElement("img");
  img.src = elem.image_url;
  

  var name = document.createElement("p");
  name.textContent = elem.name;

  var price = document.createElement("p");
  price.innerText = elem.price+ " " + " -"+ " "+elem.quant;
   price.setAttribute("class","prcd")


  var incbut = document.createElement("button")
  incbut.innerText = "Edit"
  incbut.setAttribute
  incbut.addEventListener("click", function () {
    addToCart(elem,index);
  });


  
  

  var btn = document.createElement("button");
  btn.innerText = "Remove";
  btn.addEventListener("click", function () {
    removeItem(elem, index);
  });

  box.append(img, name, price, btn,incbut);

  document.querySelector("#container").append(box);
});

function removeItem(elem, index) {
  console.log(elem, index);
  cartData.splice(index, 1);
  console.log(cartData);
  localStorage.setItem("carting", JSON.stringify(cartData));
  window.location.reload();
}


function addToCart(elem,index){

  cartData[index].quant++
  localStorage.setItem("carting", JSON.stringify(cartData))
 
  window.location.reload()
  displayData(cartData)
}

function addToCarts(elem,index){

cartData[index].quant--
localStorage.setItem("carting", JSON.stringify(cartData))

window.location.reload()
displayData(cartData)
}



var navbar = document.querySelector("#navbar")
  var menu  = document.querySelector("#men")
  window.onscroll   = function (){
      if(window.pageYOffset >= menu.offsetTop ){
          navbar.style.position = "fixed"

      }

      else{
      navbar.style.position = "relative"
      


      }
  }
