export function updateButtonVisibility() {
    const isSubscribed = localStorage.getItem("isSubscribed") === "true";
    const addBlogBtn = document.querySelector(".add-btn");
    const loginBtn = document.querySelector(".header__btn");

    if (isSubscribed) {
        addBlogBtn.classList.remove("hidden");
        loginBtn.classList.add("hidden");
    } else {
        addBlogBtn.classList.add("hidden");
        loginBtn.classList.remove("hidden");
    }
}
