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