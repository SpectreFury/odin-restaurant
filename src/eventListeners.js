import { switchToMenu, switchToAbout } from "./switchFunction";

function eventListeners() {
  const imgContainers = document.querySelectorAll(".img-container");

  imgContainers.forEach((imgContainer) => {
    imgContainer.addEventListener("click", (e) => {
      if (e.target.textContent === "Menu") {
        switchToMenu();
      } else {
        switchToAbout();
      }
    });
  });
}

export default eventListeners;
