




var indexdata1   = [
    
    
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/f/l/flowers-of-youth-essence-serum_2_1.jpg",
        name:"Wow skin Scienece Moroccon ",
        price:"₹350.00",
        strikedprice:"₹399.00",
        off:"12% off"
    },

    
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904311901631_1.jpg",
        name:"Organic Harvest Claeanising Face",
        price:"₹350.00",
        strikedprice:"₹399.00",
        off:"12% off"
    },


    
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8904311901631_1.jpg",
        name:"Organic Harvest Claeanising Face",
        price:"440.00",
        strikedprice:"₹499.00",
        off:"13% off"
    },

    
    

    
    {
        image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/c/c/cca52498904311901341_1.jpg",
        name:"Organic Harvest Claeanising Face",
        price:"₹1,420.00",
        strikedprice:"₹1,450.00",
        off:"5% off"
    },


    
    

 ] ;   





 
var goCart = []

indexdata1.map(function(elem){


var box = document.createElement("div")
  

var image = document.createElement("img")
image.src = elem.image_url
image.setAttribute("id","imagez")



var div1 = document.createElement("p")
div1.innerText = elem.name

var div = document.createElement("div")
div.setAttribute("id" ,"ssd")


var price = document.createElement("p")
price.innerText=elem.price
price.setAttribute("id","shh")


var offbu = document.createElement("p")
offbu.innerText = elem.off
offbu.setAttribute("id" ,"offsys")

var striked = document.createElement("p")
striked.innerText=elem.strikedprice
striked.setAttribute("id","pph")

var btn = document.createElement("button")
btn.innerText="Add to cart"
btn.setAttribute("id","buttsrc")
btn.addEventListener("click" ,function(){
 clickForButton(elem)
})

box.append(image,div1)
box.append(price,striked,offbu,btn)

function  clickForButton(elem){
  console.log(elem)
  elem.quant =1
  goCart.push(elem)

  localStorage.setItem("carting" , JSON.stringify(goCart))
       alert("Added")
}

document.querySelector("#jsedata").append(box)
})







    indexdata2  =[

{
    image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/7/277cf77missc00000081_1.jpg",
    name:"Miss Claire Eyelash Glue - Clear Tone",
    price:"322.00 ",
    strikedprice:"₹350.00 ",
    off:"8% off",
},

{
    image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/b/5b990e16902395773146_3.jpg",
    name:"Maybelline New York Fit Me Primer - Dewy+Smooth",
    price:"475.00",
    strikedprice:"₹499.00",
    off:"5% off",
},

{
    image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/6/9/6902395735908_0.jpg",
    name:"L'Oreal Paris Infallible Full Wear Concealer",
    price:"735.00",
    strikedprice:"₹799.00",
    off:"8% off",
},

{
    image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/1/51c18ra5qzs._sl1500_.jpg",
    name:"Faces Canada Ultime Pro Matte Play Eyeliner",
    price:"604.00 ",
    strikedprice:"₹649.00",
    off:"7% off",
},
];


var goCart = []

indexdata2.map(function(elem){


var box = document.createElement("div")
  

var image = document.createElement("img")
image.src = elem.image_url
image.setAttribute("id","imagez")



var div1 = document.createElement("p")
div1.innerText = elem.name

var div = document.createElement("div")
div.setAttribute("id" ,"ssd")


var price = document.createElement("p")
price.innerText=elem.price
price.setAttribute("id","shh")


var offbu = document.createElement("p")
offbu.innerText = elem.off
offbu.setAttribute("id" ,"offsys")

var striked = document.createElement("p")
striked.innerText=elem.strikedprice
striked.setAttribute("id","pph")

var btn = document.createElement("button")
btn.innerText="Add to cart"
btn.setAttribute("id","buttsrc")
btn.addEventListener("click" ,function(){
 clickForButton(elem)
})

box.append(image,div1)
box.append(price,striked,offbu,btn)

function  clickForButton(elem){
  console.log(elem)
  elem.quant =1
  goCart.push(elem)

  localStorage.setItem("carting" , JSON.stringify(goCart))
       alert("Added")
}

document.querySelector("#makeup10").append(box)
})




   

var  bestseller = [

{
image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/o/ponds_super_light_gel_oil_free_moisturiser_with_hyaluronic_acid_vitamin_e2.jpg",
name:"Ponds Super Light Gel Oil Free Moisturiser With Hyalauronic Acid + Vitamin E",
price:"₹299.00 ",
strikedprice:"",
off:"",



},




{
image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/c/l/cl-08_strawberry_love-min_2.png",
name:"Blue Heaven Cndy Matte Lip Color",
price:"125.00 ",
strikedprice:"",
off:"",



},



{
image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/s/dsfsdafsdfsd.jpg",
name:"Ponds Pimple Clear Face Wash - Pack of 2",
price:"498.00 ",
strikedprice:"",
off:"",



},



{
image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/r/e/repair_shampoo_650-2_1_1.jpg",
name:"Dove Intense Repair Shampoo 650ml",
price:"350.00 ",
strikedprice:"₹500.00 ",
off:"30% off",



},



{
image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/8/9/8908003416557_1.png",
name:"Organic Harvest Cleansing Milk With Essential Oils",
price:"₹491.00 ",
strikedprice:"₹545.00 ",
off:"10% off",



},


{
image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/i/m/image1_600x.jpg",
name:"Lotus Herbals Whiteglow Vitamin C Radiance Cream Spf 20",
price:"428.00 ",
strikedprice:"₹475.00 ",
off:"10% off",



},



{
image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/o/5/o5_1_1.jpg",
name:"09+ Whitening Facial Kit With Brighenieng & Whitening Peel Off Mask ",
price:"499.00 ",
strikedprice:"₹510.00 ",
off:"2% off",



},


{
image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/x/z/xzxzxzxzxz.jpeg",
name:"Ponds White Beauty Anti Spot Fairness Day Cream SPF 15 pa ++",
price:"240.00 ",
strikedprice:" ",
off:"",



},



 {
 image_url:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/g/v/gvhjgvyjhv.jpg",
 name:"Vaseline Body Lotion 400ml + Pond's Moisturising Cold Cream 55ml Free",
 price:"310.00 ",
 strikedprice:"",
 off:"",



 },

  ];


  var goCart = []

bestseller.map(function(elem){


var box = document.createElement("div")
  

var image = document.createElement("img")
image.src = elem.image_url
image.setAttribute("id","imagez")



var div1 = document.createElement("p")
div1.innerText = elem.name

var div = document.createElement("div")
div.setAttribute("id" ,"ssd")


var price = document.createElement("p")
price.innerText=elem.price
price.setAttribute("id","shh")


var offbu = document.createElement("p")
offbu.innerText = elem.off
offbu.setAttribute("id" ,"offsys")

var striked = document.createElement("p")
striked.innerText=elem.strikedprice
striked.setAttribute("id","pph")

var btn = document.createElement("button")
btn.innerText="Add to cart"
btn.setAttribute("id","buttsrc")
btn.addEventListener("click" ,function(){
 clickForButton(elem)
})

box.append(image,div1)
box.append(price,striked,offbu,btn)

function  clickForButton(elem){
  console.log(elem)
  elem.quant =1
  goCart.push(elem)

  localStorage.setItem("carting" , JSON.stringify(goCart))
       alert("Added")
}

document.querySelector("#indexlastfoot12").append(box)
})







document.querySelector("#account").addEventListener("click",funsi)




    function funsi(){
        // event.preventDefault
        console.log("yes")
        window.location.href = "signup.html"
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


