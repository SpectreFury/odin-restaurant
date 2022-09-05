function cleanPage() {
  const content = document.querySelector(".content");
  content.remove();
}

function switchToMenu() {
  cleanPage();
}

function switchToAbout() {
  cleanPage();
}

export { switchToMenu, switchToAbout };
