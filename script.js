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

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const firstNameError = document.getElementById("firstNameError");
  const lastNameError = document.getElementById("lastNameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  firstNameError.textContent = "";
  lastNameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  
  if (!firstName.value.trim()) {
    firstNameError.textContent = "Imię jest wymagane";
    isValid = false;
  }

  if (!lastName.value.trim()) {
    lastNameError.textContent = "Nazwisko jest wymagane";
    isValid = false;
  }

  if (!email.value.trim()) {
    emailError.textContent = "Email jest wymagany";
    isValid = false;
  }

  if (!message.value.trim()) {
    messageError.textContent = "Wiadomość jest wymagana";
    isValid = false;
  }


  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value && !emailPattern.test(email.value)) {
    emailError.textContent = "Niepoprawny email";
    isValid = false;
  }

  const namePattern = /^[A-Za-zÀ-ž\s]+$/;

  if (firstName.value && !namePattern.test(firstName.value)) {
    firstNameError.textContent = "Imię nie może zawierać cyfr";
    isValid = false;
  }

  if (lastName.value && !namePattern.test(lastName.value)) {
    lastNameError.textContent = "Nazwisko nie może zawierać cyfr";
    isValid = false;
  }

  if (isValid) {
    alert("Formularz wysłany poprawnie");
    form.reset();
  }
});