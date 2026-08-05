const roles = [
    "Frontend Developer",
    "Java Developer",
    "CSE Graduate",
    "Web Designer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const typing = document.getElementById("typing");

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typing.textContent = currentRole.substring(0, charIndex++);
    } else {
        typing.textContent = currentRole.substring(0, charIndex--);
    }

    let speed = 120;

    if (!isDeleting && charIndex === currentRole.length + 1) {
        isDeleting = true;
        speed = 1500;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
const themeBtn = document.getElementById("theme-toggle");

themeBtn.onclick = function () {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML="🌙";
    }else{
        themeBtn.innerHTML="☀️";
    }

}
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});
// Back To Top Button

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

}

topBtn.onclick = function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}