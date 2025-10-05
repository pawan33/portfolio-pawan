// Rotating roles
const roles = ["Python Programmer", "Data Engineer", "ETL Specialist", "Analytics Enthusiast"];
let roleIndex = 0;
const roleSpan = document.getElementById("rotatingRoles");
function rotateRoles() {
  roleSpan.innerText = roles[roleIndex];
  roleIndex = (roleIndex + 1) % roles.length;
}
rotateRoles();
setInterval(rotateRoles, 2000);

// Animate skill bars
window.addEventListener("scroll", () => {
  const skills = document.querySelectorAll(".progress-bar");
  skills.forEach(skill => {
    const skillTop = skill.offsetTop - window.innerHeight + 100;
    if (window.pageYOffset > skillTop) {
      skill.style.width = skill.getAttribute("data-width");
    }
  });
});
