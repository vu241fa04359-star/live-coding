// Button interaction
const createButton = document.querySelector(".yellow-btn");

createButton.addEventListener("click", () => {
  createButton.textContent = "Content Created ✓";

  setTimeout(() => {
    createButton.textContent = "Create Content ✦";
  }, 1800);
});

// Social card hover effect
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-3px)";
    card.style.transition = "transform .25s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// Activity bars animation
const bars = document.querySelectorAll(".bar");

bars.forEach((bar, index) => {
  bar.style.opacity = "0";

  setTimeout(() => {
    bar.style.opacity = "1";
    bar.style.transition = "opacity .5s ease";
  }, index * 120);
});
