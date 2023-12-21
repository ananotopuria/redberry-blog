import { validate } from "./email-validator.js";
import { updateButtonVisibility } from "/js/add-form.js"

export const openModalWindow = function () {
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const openModal = document.querySelector(".header__btn");
  openModal.addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
};

export const closeModalWindow = function () {
  const modal = document.querySelector(`.modal`);
  const overlay = document.querySelector(`.overlay`);
  const btnClose = document.querySelector(`.close-modal`);
  btnClose.addEventListener(`click`, function () {
    modal.classList.add(`hidden`);
    overlay.classList.add(`hidden`);
  });
};

export const overlayModal = function () {
  const modal = document.querySelector(`.modal`);
  const overlay = document.querySelector(`.overlay`);
  overlay.addEventListener(`click`, function () {
    modal.classList.add(`hidden`);
    overlay.classList.add(`hidden`);
  });
};

function saveEmailAndSubscriptionStatus(email, isSubscribed) {
  localStorage.setItem("subscriptionEmail", email);
  localStorage.setItem("isSubscribed", isSubscribed);
}

function loadEmailAndSubscriptionStatus() {
  const savedEmail = localStorage.getItem("subscriptionEmail");
  const isSubscribed = localStorage.getItem("isSubscribed") === "true";

  const emailInput = document.getElementById("email");
  if (emailInput) {
    if (savedEmail) {
      emailInput.value = savedEmail;
    }

    emailInput.addEventListener("input", handleInputChange);
  }

  updateSubscriptionUI(isSubscribed);
}

function updateSubscriptionUI(isSubscribed) {
  const emailInput = document.getElementById("email");
  const subscribeButton = document.querySelector(".modal-btn");
  const modalTitle = document.querySelector(".modal-title");
  const modalLable = document.querySelector(".modal-lable");
  const modalIcon = document.querySelector(".modal-icon");
  const modalOkButton = document.querySelector(".modal-ok");
  const modal = document.querySelector(`.modal`);
  const overlay = document.querySelector(`.overlay`);

  modalOkButton.addEventListener(`click`, function () {
    modal.classList.add(`hidden`);
    overlay.classList.add(`hidden`);
  });

  if (emailInput && subscribeButton) {
    if (isSubscribed) {
      emailInput.style.display = "none";
      subscribeButton.style.display = "none";
      modalTitle.textContent = "წარმატებული ავტორიზაცია";
      modalLable.style.display = "none";
      modalIcon.classList.remove(`hidden`);
      modalOkButton.classList.remove(`hidden`);
      const emailError = document.getElementById("error-message");
      emailError.style.display = "none";
      updateButtonVisibility();

      window.addEventListener("storage", (event) => {
    if (event.key === "isSubscribed") {
        updateButtonVisibility();
    }
});
    } else {
      emailInput.style.display = "block";
      subscribeButton.textContent = "შესვლა";
    }
  }
}

function handleInputChange(event) {
  const email = event.target.value;
  saveEmailAndSubscriptionStatus(email, false);
}

async function handleSubscriptionClick(event) {
  event.preventDefault();
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  const isValid = validate(email);

  if (!isValid) {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("error-message");
    emailInput.classList.add("invalid");
    emailError.textContent = "ელ-ფოსტა არ მოიძებნა";
  }

  const isSubscribed = localStorage.getItem("isSubscribed") === "true";
  console.log(isSubscribed, "handleSubscriptionClick");
  const subscribeButton = document.querySelector(".modal-btn");
  if (subscribeButton) {
    ToggleSubscribeButton(false);

    if (isSubscribed) {
      // await EmailUnsubscribe(email);
      localStorage.removeItem("subscriptionEmail");
      localStorage.removeItem("isSubscribed");
      loadEmailAndSubscriptionStatus();
    } else {
      await EmailSubscribe(email);
    }
  }
}

function SubscribedSuccess(email) {
  saveEmailAndSubscriptionStatus(email, true);
  loadEmailAndSubscriptionStatus();
}

function ToggleSubscribeButton(enable) {
  const subscribeButton = document.querySelector(".modal-btn");
  if (subscribeButton == undefined) return;
  if (enable) {
    subscribeButton.disabled = false;
    subscribeButton.style.opacity = 1;
  } else {
    subscribeButton.style.opacity = 0.5;
    subscribeButton.disabled = true;
  }
}

export {
  saveEmailAndSubscriptionStatus,
  loadEmailAndSubscriptionStatus,
  updateSubscriptionUI,
  handleInputChange,
  handleSubscriptionClick,
};

function EmailSubscribe(email) {
  ToggleSubscribeButton(false);
  fetch("https://api.blog.redberryinternship.ge/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then((text) => {
          throw new Error(text.error);
        });
      } else {
        SubscribedSuccess(email);
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => ToggleSubscribeButton(true));
}
