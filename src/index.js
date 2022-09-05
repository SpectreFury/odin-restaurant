import { navBar, sectionHero, sectionSelection, footer } from "./home";
import eventListeners from "./eventListeners";

const content = document.querySelector(".content");

function addToContent() {
  content.append(navBar());
  content.append(sectionHero());
  content.append(sectionSelection());
  content.append(footer());

  eventListeners();
}

addToContent();
