// Typing animation
const roles = ["Web Developer", "UI Designer", "Freelancer"];
let i = 0, j = 0, current = "", isDeleting = false;

function typeEffect() {
  if (!isDeleting && j < roles[i].length) {
    current += roles[i][j];
    j++;
  } else if (isDeleting && j > 0) {
    current = current.slice(0, -1);
    j--;
  }

  document.querySelector(".typing").textContent = current;

  if (!isDeleting && j === roles[i].length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 80 : 120);
}

typeEffect();