const navbarMenu = document.querySelector(".navbar .links");
const formPopup = document.querySelector(".form-popup");
// const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");
const signup = document.getElementById("signup-link");

signup.addEventListener("click", (e) => {
    console.log("Clicked");
})

// Show or hide signup form
// signupLoginLink.forEach(link => {
//     link.addEventListener("click", (e) => {
//         e.preventDefault();
//         formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
//     });
// });