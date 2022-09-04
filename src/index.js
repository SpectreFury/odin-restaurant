import { navBar, hero, selection } from "./home";

const content = document.querySelector(".content");

function addToContent() {
  content.append(navBar(), hero());
}

addToContent();
