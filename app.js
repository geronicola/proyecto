const modal = document.getElementById("modal")
const openButton = document.getElementById("btn-ingresar")
const closeButtonArrow = document.getElementById("btn-close-arrow")
const closeButtonCross = document.getElementById("btn-close-cross")
const overlay = document.getElementById("overlay");

openButton.addEventListener("click", function(e){
    console.log(e)
    modal.style.display = "block";
    overlay.style.display = "block"
    overlay.appendChild(modal)
})

closeButtonArrow.addEventListener("click", function(){
    modal.style.display = "none";
    overlay.style.display = "none"
    overlay.remove(modal)
})

closeButtonCross.addEventListener("click", function(){
    modal.style.display = "none";
    overlay.style.display = "none"
    overlay.remove(modal)
})





