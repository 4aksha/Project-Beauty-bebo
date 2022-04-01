
    document.querySelector("button").addEventListener("click", mygoc)

    i

    function mygoc () {
        event.preventDefault()


        
        window.location.href = "cardpage.html"

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