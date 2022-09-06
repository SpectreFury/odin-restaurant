import { navBarMenu } from "./menu";

function cleanPage() {
  const content = document.querySelector(".content");
  content.remove();
}

function switchToMenu() {
  const content = document.createElement("div");
  content.classList.add("content");
  document.body.append(content);

  cleanPage();
  content.append(navBarMenu());
}

function switchToAbout() {
  cleanPage();
}

export { switchToMenu, switchToAbout };
