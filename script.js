let currentSlide = 1;

function nextSlide() {
    document.getElementById(`slide${currentSlide}`).classList.remove("active");
    currentSlide++;
    document.getElementById(`slide${currentSlide}`).classList.add("active");
}

function revealGift() {
    document.getElementById("gift").classList.remove("hidden");
}

function submitWish() {
    const wishInput = document.getElementById("wishInput").value;
    if (wishInput.trim() === "") {
        alert("Harapan tidak boleh kosong!");
        return;
    }

    const wishWall = document.getElementById("wishWall");
    const wish = document.createElement("p");
    wish.textContent = `💌 "${wishInput}"`;
    wishWall.appendChild(wish);
    document.getElementById("wishInput").value = "";
}

document.getElementById("slide1").classList.add("active");
