
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const signupBtn = document.getElementById("signup-link");
const loginBtn = document.getElementById("log-in-btn");

loginBtn.addEventListener("click", (e) => {
    console.log("login btn clicked");
})


signupBtn.addEventListener("click", (e) => {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
})  

// Show or hide signup form
// signupLoginLink.forEach(link => {
//     link.addEventListener("click", (e) => {
//         e.preventDefault();
//         formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
//     });
// });
