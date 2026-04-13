const themeBtn = document.getElementById("themeBtn");
const link = document.querySelector("link");

let isGreen = true;

themeBtn.addEventListener("click", () => {
  if (isGreen) {
    link.setAttribute("href", "red.css");
  } else {
    link.setAttribute("href", "green.css");
  }
  isGreen = !isGreen;
});

const toggleBtn = document.getElementById("toggleBtn");
const projectsSection = document.getElementById("projects");

toggleBtn.addEventListener("click", () => {
  if (projectsSection.style.display === "none") {
    projectsSection.style.display = "block";
  } else {
    projectsSection.style.display = "none";
  }
});