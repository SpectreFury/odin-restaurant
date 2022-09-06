function navBarAbout() {
  const nav = document.createElement("nav");
  nav.classList.add("nav-menu");

  const button = document.createElement("button");
  button.classList.add("btn-back");
  button.textContent = "Back";

  const img = document.createElement("img");
  img.src = "./witcher-logo.png";

  nav.append(button, img);

  return nav;
}

function sectionAbout() {
  const sectionAbout = document.createElement("section");
  sectionAbout.classList.add("section-about");

  const p = document.createElement("p");
  p.textContent =
    "As war rages on throughout the Northern Realms, you take on the greatest contract of your life - tracking down the Child of Prophecy, a living weapon that can alter the shape of the world.";

  sectionAbout.append(p);

  return sectionAbout;
}

function sectionLinks() {
  const sectionLinks = document.createElement("section");
  sectionLinks.classList.add("section-links");

  const sectionLinksInner = document.createElement("section");
  sectionLinksInner.classList.add("section-links-inner");

  const buttonXbox = document.createElement("button");
  const buttonPS = document.createElement("button");
  const buttonPC = document.createElement("button");
  const buttonSwitch = document.createElement("button");

  const imgXbox = document.createElement("img");
  const imgPS = document.createElement("img");
  const imgPC = document.createElement("img");
  const imgSwitch = document.createElement("img");

  imgXbox.src = "./xbox.png";
  imgPS.src = "./ps.png";
  imgPC.src = "./pc.png";
  imgSwitch.src = "./switch.png";

  buttonXbox.append(imgXbox);
  buttonPS.append(imgPS);
  buttonPC.append(imgPC);
  buttonSwitch.append(imgSwitch);

  sectionLinksInner.append(buttonXbox, buttonPS, buttonPC, buttonSwitch);

  sectionLinks.append(sectionLinksInner);

  return sectionLinks;
}

export { navBarAbout, sectionAbout, sectionLinks };
