import { navBarMenu, menu } from "./menu";
import { navBarAbout, sectionAbout, sectionLinks } from "./about";
import { navBarHero, sectionHero, sectionSelection, footerHero } from "./home";
import eventListeners from "./eventListeners";

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
  content.append(menu());

  const backButton = document.querySelector(".btn-back");
  backButton.addEventListener("click", () => {
    cleanPage();
    const content = document.createElement("div");
    content.classList.add("content");
    document.body.append(content);

    content.append(
      navBarHero(),
      sectionHero(),
      sectionSelection(),
      footerHero()
    );

    eventListeners();
  });
}

function switchToAbout() {
  const content = document.createElement("div");
  content.classList.add("content");
  document.body.append(content);

  cleanPage();
  content.append(navBarAbout());
  content.append(sectionAbout());
  content.append(sectionLinks());

  const backButton = document.querySelector(".btn-back");
  backButton.addEventListener("click", () => {
    cleanPage();
    const content = document.createElement("div");
    content.classList.add("content");
    document.body.append(content);

    content.append(
      navBarHero(),
      sectionHero(),
      sectionSelection(),
      footerHero()
    );

    eventListeners();
  });
}

export { switchToMenu, switchToAbout };
