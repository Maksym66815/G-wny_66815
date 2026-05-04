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

fetch("data.json")
  .then(response => response.json())
  .then(data => {

    const skillsList = document.getElementById("skillsList");
    const projectsList = document.getElementById("projectsList");

    data.skills.forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill;
      skillsList.appendChild(li);
    });

    data.projects.forEach(project => {
      const li = document.createElement("li");
      li.textContent = project;
      projectsList.appendChild(li);
    });

  })
  .catch(error => console.error("Błąd ładowania JSON:", error));

  const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesList = document.getElementById("notesList");


let notes = JSON.parse(localStorage.getItem("notes")) || [];


function renderNotes() {
  notesList.innerHTML = "";

  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.textContent = note;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Usuń";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", () => {
      notes.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notes));
      renderNotes();
    });

    li.appendChild(deleteBtn);
    notesList.appendChild(li);
  });
}


addNoteBtn.addEventListener("click", () => {
  const value = noteInput.value.trim();

  if (!value) return;

  notes.push(value);
  localStorage.setItem("notes", JSON.stringify(notes));

  noteInput.value = "";
  renderNotes();
});


renderNotes();