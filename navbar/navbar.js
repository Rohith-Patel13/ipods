let barsCrossIdEl = document.getElementById("barsCrossId");
let linksContainerIdEl = document.getElementById("linksContainerId");
barsCrossIdEl.addEventListener("click", () => {
  barsCrossIdEl.classList.toggle("fa-x");
  linksContainerIdEl.classList.toggle("linksContainerDynamicallyShow");
});
