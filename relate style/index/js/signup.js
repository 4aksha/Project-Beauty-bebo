       
    document.querySelector("#sub").addEventListener("click",myFuncti)
    var sigDa = JSON.parse(localStorage.getItem("signOBg"))||[]
     function myFuncti(){
       event.preventDefault()
       var signObj = {
           name:document.querySelector("#email").value, 
           number:document.querySelector("#mobile").value, 
           pass:document.querySelector("#pass").value, 
       }
 
       console.log(signObj)
       sigDa.push(signObj)
 
       localStorage.setItem("signOBg",JSON.stringify(sigDa))
       window.location.href="login.html"
     }
 
 
 
 
 
            
     document.querySelector("#sub").addEventListener("click",myFuncti)
       var sigDa = JSON.parse(localStorage.getItem("signOBg"))||[]
        function myFuncti(){
          event.preventDefault()
          var signObj = {
              name:document.querySelector("#inputD").value, 
              number:document.querySelector("#inputE").value, 
              pass:document.querySelector("#inputF").value, 
          }
 
          console.log(signObj)
          sigDa.push(signObj)
 
          localStorage.setItem("signOBg",JSON.stringify(sigDa))
          window.location.href="login.html"
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
 