    
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