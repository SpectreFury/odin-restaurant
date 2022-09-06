function navBarHero() {
  const nav = document.createElement("nav");
  const img = document.createElement("img");

  img.src = "./witcher-logo.png";
  img.alt = "Witcher Medallion";

  nav.append(img);
  return nav;
}

function sectionHero() {
  const section = document.createElement("section");
  section.classList.add("hero");

  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.textContent = "Stomach's Growling.";
  p.textContent = "A place of food. It must be!";

  section.append(h1, p);
  return section;
}

function sectionSelection() {
  const section = document.createElement("section");
  section.classList.add("selection");

  const foodDiv = document.createElement("div");
  const aboutDiv = document.createElement("div");

  foodDiv.classList.add("food");
  foodDiv.classList.add("img-container");
  aboutDiv.classList.add("about");
  aboutDiv.classList.add("img-container");

  const foodImg = document.createElement("img");
  foodImg.src = "./menu-icon.jpg";
  const aboutImg = document.createElement("img");
  aboutImg.src = "./witcher-logo-text.png";

  const foodH2 = document.createElement("h2");
  foodH2.textContent = "Menu";
  const aboutH2 = document.createElement("h2");
  aboutH2.textContent = "About";

  foodDiv.append(foodImg, foodH2);
  aboutDiv.append(aboutImg, aboutH2);

  section.append(foodDiv, aboutDiv);
  return section;
}

function footerHero() {
  const footer = document.createElement("footer");

  const legalText = document.createElement("div");
  legalText.textContent = "Made by SpectreFury with ❤";
  legalText.classList.add("legal-text");

  footer.append(legalText);

  return footer;
}

export { navBarHero, sectionHero, sectionSelection, footerHero };
