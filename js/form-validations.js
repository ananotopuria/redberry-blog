const goBackButton = document.querySelector(".back__btn");
goBackButton.addEventListener("click", function (e) {
  e.preventDefault();
  location.href = `./index.html`;
});

const authorInput = document.getElementById("author");
authorInput.addEventListener("input", function () {
  validateAuthorInput(this.value);
});

const titleInput = document.getElementById("title");
titleInput.addEventListener("input", function () {
  validateTitle(this.value);
});

const descriptionInput = document.getElementById("description");
descriptionInput.addEventListener("input", function () {
  validateDescription(this.value);
});

function validateAuthorInput(value) {
  const nameError = document.getElementById("name-error");
  const georgianCharValidation = document.getElementById(
    "georgian-char-validation"
  );
  const twoWordValidation = document.getElementById("word-count-validation");

  if (value.length < 4) {
    nameError.classList.add("invalid-message");
    nameError.style.color = "red";
  } else {
    nameError.classList.remove("invalid-message");
    nameError.style.color = "green";
  }

  if (!/^\S+\s\S+$/u.test(value)) {
    twoWordValidation.classList.add("invalid-message");
    twoWordValidation.style.color = "red";
  } else {
    twoWordValidation.classList.remove("invalid-message");
    twoWordValidation.style.color = "green";
  }

  if (!/^[\u10A0-\u10FF\s]+$/u.test(value)) {
    georgianCharValidation.classList.add("invalid-message");
    georgianCharValidation.style.color = "red";
  } else {
    georgianCharValidation.classList.remove("invalid-message");
    georgianCharValidation.style.color = "green";
  }

  if (
    value.length > 4 &&
    /^\S+\s\S+$/u.test(value) &&
    /^[\u10A0-\u10FF\s]+$/u.test(value)
  ) {
    authorInput.classList.remove("invalid");
    authorInput.classList.add("valid");
  } else {
    authorInput.classList.remove("valid");
    authorInput.classList.add("invalid");
  }
}

function validateTitle(value) {
  const titleError = document.getElementById("title-error");

  if (value.length < 2) {
    titleError.classList.add("invalid-message");
    titleError.style.color = "red";
  } else {
    titleError.classList.remove("invalid-message");
    titleError.style.color = "green";
  }

  if (value.length >= 2) {
    titleInput.classList.remove("invalid");
    titleInput.classList.add("valid");
  } else {
    titleInput.classList.remove("valid");
    titleInput.classList.add("invalid");
  }
}
function validateDescription(value) {
  const descriptionError = document.getElementById("description-error");

  if (value.length < 4) {
    descriptionError.classList.add("invalid-message");
    descriptionError.style.color = "red";
  } else {
    descriptionError.classList.remove("invalid-message");
    descriptionError.style.color = "green";
  }

  if (value.length >= 4) {
    descriptionInput.classList.remove("invalid");
    descriptionInput.classList.add("valid");
  } else {
    descriptionInput.classList.remove("valid");
    descriptionInput.classList.add("invalid");
  }
}

const emailInput = document.getElementById("email");

emailInput.addEventListener("input", function () {
  validateEmail(this.value);
});

function validateEmail(email) {
  const redberryEmailPattern = /@redberry\.ge$/;

  const emailError = document.getElementById("email-error");

  if (!redberryEmailPattern.test(email)) {
    emailError.classList.add("invalid-message");
    emailError.style.color = "red";
  } else {
    emailError.classList.remove("invalid-message");
    emailError.style.color = "green";
  }

  if (!redberryEmailPattern.test(email)) {
    emailInput.classList.remove("valid");
    emailInput.classList.add("invalid");
  } else {
    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");
  }
}

const dateInput = document.getElementById("date");

dateInput.addEventListener("input", function () {
  validateDateInput();
});

function validateDateInput() {
  if (dateInput.value.trim() !== "") {
    dateInput.classList.add("valid");
  } else {
    dateInput.classList.add("invalid");
  }
}
