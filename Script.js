// Dynamic image sources
const images = [
  "https://picsum.photos/id/1015/800/400",
  "https://picsum.photos/id/1016/800/400",
  "https://picsum.photos/id/1025/800/400",
  "https://picsum.photos/id/1033/800/400",
  "https://picsum.photos/id/1044/800/400"
];

const slidesContainer = document.querySelector(".slides");
const dotsContainer = document.querySelector(".dots");

// Create slides dynamically
images.forEach((src, index) => {
  const img = document.createElement("img");
  img.src = src;
  slidesContainer.appendChild(img);

  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

// Show slide function
function showSlide(index) {
  if (index >= images.length) index = 0;
  if (index < 0) index = images.length - 1;
  currentIndex = index;
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Next / Prev button
document.querySelector(".next").addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

document.querySelector(".prev").addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

// Auto Slide
setInterval(() => {
  showSlide(currentIndex + 1);
}, 4000);
