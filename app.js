const modal = docmet.getElementById("modal")
const openButton = document.getElementById("btn-ingresar")
const closeButtonArrow = document.getElementById("btn-close-arrow")
const closeButtonCross = document.getElementById("btn-close-cross")

openButton.addEventListener("click", function(){
    modal.style.display = "block";
})

closeButtonArrow.addEventListener("click", function(){
    modal.style.display = "none";
})

closeButtonCross.addEventListener("click", function(){
    modal.style.display = "none";
})





