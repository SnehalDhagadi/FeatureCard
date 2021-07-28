// For more check out zachsaucier.com

function handleMouseover(e) {
    document.querySelector(".active").classList.remove("active");
    e.target.closest(".card").classList.add("active");
}

document.querySelectorAll(".card").forEach(card => card.addEventListener("mouseover", handleMouseover) );