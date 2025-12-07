document.addEventListener("keydown",function(e){
    if(e.key==="ArrowUp"){
        show.textContent="you pressed : Arrow Up"
    } else if(e.key==="ArrowDown"){
          show.textContent="you pressed : Arrow down"
    } else if(e.key==="ArrowLeft"){
          show.textContent="you pressed : Arrow letf"
    } else if (e.key==="ArrowRight"){
          show.textContent="you pressed : Arrow right"
    }

});
