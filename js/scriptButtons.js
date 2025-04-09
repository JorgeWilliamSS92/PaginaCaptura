const button0 = document.getElementById("button0");
const button = document.getElementById("button");
const container = document.getElementById("container0");
const div = document.getElementById("close");
const closeB = div.firstElementChild;

button.addEventListener("click", showSection);
button0.addEventListener("click", showSection);

function showSection() {
  container.style.display = "flex";
}

closeB.addEventListener("click", () => {
  container.style.display = "none";
});
