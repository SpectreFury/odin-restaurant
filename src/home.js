function navBar() {
  const nav = document.createElement("nav");
  const img = document.createElement("img");

  img.src = "./witcher-logo.png";
  img.alt = "Witcher Medallion";

  nav.append(img);
  return nav;
}

function hero() {
  const section = document.createElement("section");
  section.classList.add("hero");

  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.textContent = "Stomach's Growling.";
  p.textContent = "A place of food. It must be!";

  section.append(h1, p);
  return section;
}

export { navBar, hero };
