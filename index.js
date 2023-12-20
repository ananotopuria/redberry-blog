import {
  openModalWindow,
  closeModalWindow,
  overlayModal,
  loadEmailAndSubscriptionStatus,
  handleInputChange,
  handleSubscriptionClick,
} from "/js/modal.js";

openModalWindow();
closeModalWindow();
overlayModal();

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  if (emailInput) {
    emailInput.addEventListener("input", handleInputChange);
  }

  const subscribeButton = document.querySelector(".modal-btn");
  console.log("subscribeButton", subscribeButton);

  if (subscribeButton) {
    subscribeButton.addEventListener("click", handleSubscriptionClick);
  }

  loadEmailAndSubscriptionStatus();
});
