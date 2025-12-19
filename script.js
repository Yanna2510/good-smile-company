let index = 0;
const slides = document.querySelectorAll(".slide");
const total = slides.length;

document.getElementById("nextBtn").addEventListener("click", () => {
    index = (index + 1) % total;
    update();
});

document.getElementById("prevBtn").addEventListener("click", () => {
    index = (index - 1 + total) % total;
    update();
});

function update() {
    document.getElementById("carousel").style.transform =
        `translateX(-${index * 100}%)`;
}
