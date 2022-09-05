import { navBar, sectionHero, sectionSelection, footer } from "./home";

const content = document.querySelector(".content");

function addToContent() {
  content.append(navBar());
  content.append(sectionHero());
  content.append(sectionSelection());
  content.append(footer());
}

addToContent();
