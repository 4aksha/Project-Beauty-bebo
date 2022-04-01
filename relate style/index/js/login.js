
     document.querySelector("#signbutt").addEventListener("click" , logFunct)
     var logGetD = JSON.parse(localStorage.getItem("signOBg"))
      
     function  logFunct(){ 
        event.preventDefault()
     
        var logEm = document.querySelector("#inputD").value 
        var  logPm = document.querySelector("#inputF").value
    
        window.location.href="signup.html"
      for(var i=0;i<logGetD.length;i++){
        if(logGetD[i].name==logEm&&logGetD[i].pass==logPm){
            alert("Login Success")
         
            window.location.href="mycart.html"
            break;
        }
    
        else
        {
            alert("Login Failed")
           
            window.location.href="signup.html"
            break
        }
    
    }
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