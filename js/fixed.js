
let myScreen = window.screen.availHeight;
lastFunction = 0;
let myClassRemove = document.getElementById("header");
window.addEventListener('scroll', function(e) {
    lastFunction = window.scrollY;
    if (lastFunction>= myScreen/2) {
        
        myClassRemove.classList.remove("header");
        myClassRemove.classList.add("fixed-content");
      
    }
    else{
        myClassRemove.classList.add("header");
        myClassRemove.classList.remove("fixed-content");

    }
  });