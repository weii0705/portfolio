let number=0
const card = document.querySelectorAll(".card");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

prevBtn.addEventListener("click", () => {
    number--
    if (number < 0) {
        number = card.length - 1;
    }

})

function changeImage() {
    
}