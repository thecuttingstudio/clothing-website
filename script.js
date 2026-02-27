// Scroll Progress Bar
window.onscroll = function() {
let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
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

// Custom Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e=>{
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";
});

// Page Load Fade
window.onload = ()=>{
document.body.style.opacity="1";
};