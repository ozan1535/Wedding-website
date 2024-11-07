var elem = document.getElementById("toggle");
var list = document.getElementById("listeleme");
var dogru = false;


elem.addEventListener("click", function(){
    if(dogru){
        if(window.innerWidth > 0 && window.innerWidth < 1300){
            elem.classList.add("yana");
            list.style.left = -300+ "px";
            dogru = false;
        }
        else{
            elem.style.left = 25 + "px";
            list.style.left = -230 + "px";
            elem.classList.add("yana");
            dogru = false;
        }
    }
    else {
        if(window.innerWidth > 0 && window.innerWidth < 1300){
            elem.classList.remove("yana");
            list.style.left = -230+ "px";
            dogru = true;
        }
        else{
        elem.style.left = 255 + "px";
        list.style.left = 0+ "px";
        elem.classList.remove("yana");
        dogru = true;
        }
    }
});

