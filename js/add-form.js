const addBlogBtn = document.querySelector(".add-btn");
const loginBtn = document.querySelector(".header__btn");


export function updateButtonVisibility() {
    const isSubscribed = localStorage.getItem("isSubscribed") === "true";

    if (isSubscribed) {
        addBlogBtn.classList.remove("hidden");
        loginBtn.classList.add("hidden");
    } else {
        addBlogBtn.classList.add("hidden");
        loginBtn.classList.remove("hidden");
    }
}


addBlogBtn.addEventListener("click",function(e) {
    e.preventDefault();
    console.log(`btn clikced`)
    location.href = `./form.html`;
});


