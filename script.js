// Progress Bar
window.onscroll = function() {
let winScroll = document.documentElement.scrollTop;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let scrolled = (winScroll / height) * 100;
document.getElementById("progress-bar").style.width = scrolled + "%";
};

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
reveals.forEach((el) => {
const windowHeight = window.innerHeight;
const revealTop = el.getBoundingClientRect().top;
if(revealTop < windowHeight - 100){
el.classList.add("active");
}
});
});

// Mobile Menu
function toggleMenu(){
document.getElementById("nav-links").classList.toggle("active");
}

// Email Subscribe
function subscribe(){
let email = document.getElementById("emailInput").value;
let message = document.getElementById("emailMessage");

if(email === ""){
message.innerHTML = "Please enter a valid email.";
message.style.color = "yellow";
} else {
message.innerHTML = "🎉 Discount unlocked! Check your email.";
message.style.color = "#fff";
document.getElementById("emailInput").value="";
}
}
