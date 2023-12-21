import {
  openModalWindow,
  closeModalWindow,
  overlayModal,
  loadEmailAndSubscriptionStatus,
  handleInputChange,
  handleSubscriptionClick,
} from "/js/modal.js";
// import { updateButtonVisibility } from "/js/add-form.js";

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



// displayAddButton();


// updateButtonVisibility();

// window.addEventListener("storage", (event) => {
//     if (event.key === "isSubscribed") {
//         updateButtonVisibility();
//     }
// });