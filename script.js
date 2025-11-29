// =======================
// MOBILE MENU TOGGLE
// =======================
const menuBtn = document.getElementById("menuBtn");
const navContent = document.querySelector(".nav-content");

menuBtn.addEventListener("click", () => {
    navContent.classList.toggle("show-menu");
});


// =======================
// CAPTCHA GENERATION
// =======================
function generateCaptcha() {
    let captcha = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("captcha").textContent = captcha;
}
generateCaptcha(); // initial call


// =======================
// FORM VALIDATION
// =======================
const form = document.getElementById("contactForm");
const captchaInput = document.querySelector(".captcha-input");
const captchaDisplay = document.getElementById("captcha");
const msg = document.getElementById("msg");
const checkbox = document.getElementById("mycheckbox");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!checkbox.checked) {
        msg.style.color = "red";
        msg.textContent = "You must agree to the terms!";
        return;
    }

    if (captchaInput.value !== captchaDisplay.textContent) {
        msg.style.color = "red";
        msg.textContent = "Incorrect Captcha!";
        generateCaptcha();
        return;
    }

    msg.style.color = "green";
    msg.textContent = "Submitted Successfully!";
    form.reset();
    generateCaptcha();
});


// =======================
// FAQ DROPDOWN
// =======================
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const header = item.querySelector(".faq-header");
    const body = item.querySelector(".faq-body");

    header.addEventListener("click", () => {
        body.style.display = (body.style.display === "block") ? "none" : "block";
    });
});
