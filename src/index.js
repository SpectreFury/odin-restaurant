import { navBar, sectionHero, sectionSelection } from "./home";

const content = document.querySelector(".content");

function addToContent() {
  content.append(navBar());
  content.append(sectionHero());
  content.append(sectionSelection());
}

addToContent();
