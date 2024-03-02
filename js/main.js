const menuBtn = document.querySelector(".navbar__btn")
const modal = document.querySelector(".modal")
const modalBtn = document.querySelector(".modal__btn")


menuBtn.addEventListener("click", function(){
    modal.style.display = "block";
    modal.style.background = "yellow";  

})

modalBtn.addEventListener("click", function(){
    modal.style.display = "none";

})