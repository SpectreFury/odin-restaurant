import { navBarHero, sectionHero, sectionSelection, footerHero } from "./home";
import eventListeners from "./eventListeners";

const content = document.querySelector(".content");

function addToContent() {
  content.append(navBarHero());
  content.append(sectionHero());
  content.append(sectionSelection());
  content.append(footerHero());

  eventListeners();
}

// addToContent();
